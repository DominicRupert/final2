
<template>
  <!-- TODO no vaultId is being passed on add to vault -->
  <div
    class="modal fade"
    id="modalLg"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
    v-if="keep"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <img :src="keep.img" alt="" class="img-fluid rounded" />
            </div>
            <div class="col-6 text-center py-2 d-flex flex-column">
              <div class="row">
                <div class="col-6 d-flex justify-content-end">
                  <h5 title="Views" class="text-secondary">
                    <i class="mdi mdi-eye text-primary"></i>
                    {{ keep.views }}
                  </h5>
                </div>
                <div class="col-6 d-flex">
                  <h5 title="Saved in vaults" class="text-secondary">
                    <i class="mdi mdi-safe text-primary"></i>
                    {{ keep.kept }}
                  </h5>
                </div>
              </div>
              <div class="row">
                <h1 class="amatic my-3">
                  {{ keep.name }}
                </h1>
                <div class="col-12">
                  <p class="comfortaa text-start">
                    {{ keep.description }}
                  </p>
                  <hr class="mx-4" />
                </div>
              </div>
              <div class="row mt-auto">
                <div
                  class="col-5 text-start"
                  v-if="route.name === 'Home' || route.name === 'Profile'"
                >
                  <div class="" v-if="user.isAuthenticated">
                    <button
                      class="btn btn-outline-success w-100"
                      v-if="vaultIdRef.vaultId"
                      @click="addToVault()"
                    >
                      Add to vault
                    </button>
                    <button
                      class="btn btn-outline-success w-100 disabled"
                      v-else
                    >
                      Add to vault
                    </button>
                    <select
                      class="form-control text-primary"
                      name="vaultSelect"
                      id="vaultSelect"
                      v-model="vaultIdRef.vaultId"
                    >
                      <option disabled selected>Add to vault</option>
                      <option v-for="v in myVaults" :key="v.id" :value="v.id">
                        {{ v.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  class="col-5 text-start"
                  v-else-if="
                    activeVault?.creatorId === account?.id &&
                    route.name !== 'Profile'
                  "
                >
                  <button
                    class="btn btn-outline-secondary btn-sm h-75"
                    @click="removeFromVault"
                  >
                    Remove from vault
                  </button>
                </div>
                <div class="col-5" v-else></div>
                <div
                  class="col-1 d-flex align-items-end justify-content-center"
                  v-if="keep.creatorId === account.id && route.name !== 'Vault'"
                >
                  <h3 class="mb-0">
                    <i
                      class="
                        mdi mdi-delete-outline
                        text-secondary
                        darken-10
                        selectable
                      "
                      @click="deleteKeep(keep.id)"
                      title="Delete this keep from Keepr"
                    ></i>
                  </h3>
                </div>
                <div class="col-1" v-else></div>
                <div class="col-6 d-flex align-items-end">
                  <p
                    class="selectable rounded mb-0"
                    @click="goToProfile(keep.creatorId)"
                  >
                    <img
                      :src="keep.creator?.picture"
                      class="rounded"
                      width="40"
                      height="40"
                    />
                    {{ keep.creator?.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { Modal } from 'bootstrap'
import { useRoute, useRouter } from 'vue-router'
import { vaultKeepsService } from "../services/VaultKeepsService.js";
import Pop from '../utils/Pop.js'
import { keepsService } from '../services/KeepsService.js'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const vaultIdRef = ref({})
    return {
      route,
      vaultIdRef,
      user: computed(() => AppState.user),
      activeVault: computed(() => AppState.activeVault),
      account: computed(() => AppState.account),
      keep: computed(() => AppState.activeKeep),
      myVaults: computed(() => AppState.myVaults),
			availableVaults: computed(() => {
				let vkList = AppState.myVaults

			}),
      account: computed(() => AppState.account),
      goToProfile(id) {
        Modal.getOrCreateInstance(document.getElementById('modalLg')).hide()
        router.push({ name: "Profile", params: { id } })
      },
      async addToVault() {
        let vaultKeep = {
          vaultId: vaultIdRef.value.vaultId,
          keepId: this.keep.id
        }
        try {
          await vaultKeepsService.addKeep(vaultKeep)
          Pop.toast('Added to vault!', 'success')
          vaultIdRef.value = {}
        }
        catch (error) {
          console.error("[COULD_NOT_ADD_TO_VAULT]", error.message);
          Pop.toast("Could not add to vault. (Is this keep already in the vault you selected?)", "error");
          vault.value.vaultId = {}
        }
      },
      async removeFromVault() {
        try {
          // TODO make the methods to remove from vault
          if (await Pop.confirm('Are you sure?', 'Would you like to remove this keep from your vault?', 'warning', 'Yes, remove it!')) {
            const target = AppState.activeVaultKeeps.find(vk => vk.id === AppState.activeKeep.id)
            Modal.getOrCreateInstance(document.getElementById('modalLg')).hide()
            await vaultKeepsService.deleteFromVault(target.vaultKeepId)
          }
        }
        catch (error) {
          console.error("[COULD NOT REMOVE KEEP]", error.message);
          Pop.toast(error.message, "error");
        }
      },
      async deleteKeep(keepId) {
        try {
          if (await Pop.confirm()) {
            await keepsService.delete(keepId)
            Pop.toast('Keep deleted from Keepr')
          }
        }
        catch (error) {
          console.error("[COULD_NOT_DELETE_KEEP]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>