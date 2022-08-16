<template>
  <div class="col-md-3 col-6 d-flex mb-4">
    <div
      class="card bg-primary lighten-30 w-100 ratio ratio-1x1 selectable"
      @click="goToVault()"
    >
      <div class="card-title p-2 d-flex align-items-end justify-content-center">
        <h4 class="comfortaa">{{ vault.name }}</h4>
        <p class="fs-5 comfortaa"></p>
      </div>
    </div>
  </div>
</template>



<script>
import { useRouter } from 'vue-router'
import { vaultKeepsService } from '../services/VaultKeepsService.js'
import { vaultsService } from '../services/VaultsService.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    vault: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    return {
      async goToVault() {
        try {
          await vaultKeepsService.getVaultKeeps(props.vault.id)
          router.push({ name: "Vault", params: { id: props.vault.id } })
        }
        catch (error) {
          console.error("[COULD NOT LOAD VAULT]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.p-100 {
  padding-top: 100%;
}
</style>