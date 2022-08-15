<template>
  <div
    class="container"
    v-if="activeProfile && activeUsersVaults && activeUsersKeeps"
  >
    <div class="row mb-5"><Profile /></div>
    <div class="row mb-5">
      <h3 class="comfortaa ms-2">
        Vaults
        <i
          class="mdi mdi-plus text-primary action"
          @click="openVaultModal()"
          v-if="activeProfile.id === account.id"
        ></i>
      </h3>
      <Vault v-for="v in activeUsersVaults" :key="v.id" :vault="v" />
    </div>
    <h3 class="comfortaa ms-2">
      Keeps
      <i
        class="mdi mdi-plus text-primary action"
        @click="openKeepModal()"
        v-if="activeProfile.id === account.id"
      ></i>
    </h3>
    <div class="masonry-with-columns">
      <Keep v-for="k in activeUsersKeeps" :key="k.id" :keep="k" />
    </div>
  </div>
  <div class="container" v-else>
    <div class="row mt-5 text-center">
      <h1>Loading...</h1>
    </div>
  </div>
  <Modal id="createKeepModal">
    <template #title> Create a Keep </template>
    <template #body>
      <CreateKeepForm />
    </template>
  </Modal>
  <Modal id="createVaultModal">
    <template #title> Create a Vault </template>
    <template #body>
      <CreateVaultForm />
    </template>
  </Modal>
</template>


<script>
import { computed, onMounted, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
import { profilesService } from "../services/ProfilesService.js";
import Pop from '../utils/Pop.js';
import { Modal } from 'bootstrap';
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await profilesService.getProfileById(route.params.id)
      }
      catch (error) {
        console.error("[COULD_NOT_LOAD_USER]", error.message);
        Pop.toast(error.message, "error");
      }
    })
    onMounted(async () => {
      try {
        await profilesService.getUsersKeeps(route.params.id)
      }
      catch (error) {
        console.error("[COULD_NOT_LOAD_KEEPS]", error.message);
        Pop.toast(error.message, "error");
      }
    })
    onMounted(async () => {
      try {
        await profilesService.getUsersVaults(route.params.id)
      }
      catch (error) {
        console.error("[COULD_NOT_LOAD_VAULTS]", error.message);
        Pop.toast(error.message, "error");
      }
    })
    return {
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile),
      activeUsersVaults: computed(() => AppState.activeUsersVaults),
      activeUsersKeeps: computed(() => AppState.activeUsersKeeps),
      openVaultModal() {
        document.getElementById('createVaultForm').reset()
        Modal.getOrCreateInstance(document.getElementById('createVaultModal')).toggle()
      },
      openKeepModal() {
        document.getElementById('createKeepForm').reset()
        Modal.getOrCreateInstance(document.getElementById('createKeepModal')).toggle()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>