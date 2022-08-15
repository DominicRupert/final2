<template>
  <div class="container">
    <div class="row justify-content-between my-5">
      <div class="col-6">
        <h1 class="comfortaa">{{ vault?.name }}</h1>
      </div>
      <div class="col-6 text-end" v-if="account.id === vault?.creatorId">
        <button
          class="btn btn-outline-secondary btn-lg"
          @click="deleteVault(vault?.id)"
        >
          Delete Vault
        </button>
      </div>
    </div>
    <div class="masonry-with-columns">
      <Keep v-for="vk in vaultKeeps" :key="vk.id" :keep="vk" />
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js';
import { useRoute, useRouter } from 'vue-router';
import { vaultsService } from '../services/VaultsService.js';
import { AppState } from '../AppState.js';
import { vaultKeepsService } from '../services/VaultKeepsService.js';
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    onMounted(async () => {
      try {
        await vaultsService.getById(route.params.id)
      }
      catch (error) {
        console.error("[THIS_VAULT_IS_PRIVATE]", error.message);
        Pop.toast("You do not have access to this vault", "error");
        router.push({ name: "Home" })
      }
    })
    onMounted(async () => {
      try {
        await vaultKeepsService.getVaultKeeps(route.params.id)
      }
      catch (error) {
        console.error("[COULD_NOT_GET_KEEPS_IN_VAULT]", error.message);
        Pop.toast(error.message, "error");
      }
    })
    return {
      vault: computed(() => AppState.activeVault),
      account: computed(() => AppState.account),
      vaultKeeps: computed(() => AppState.activeVaultKeeps),
      async deleteVault(id) {
        try {
          if (await Pop.confirm()) {
            await vaultsService.delete(id)
            Pop.toast('Vault Deleted', 'success')
            router.push({ name: "Profile", params: { id: this.account.id } })
          }
        }
        catch (error) {
          console.error("[COULD_NOT_DELETE_VAULT]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>