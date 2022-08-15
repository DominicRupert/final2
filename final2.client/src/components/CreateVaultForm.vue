<template>
  <form @submit.prevent="createVault()" id="createVaultForm">
    <div class="mb-3">
      <label for="name" class="form-label ms-1">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        placeholder="Enter the vaults name..."
        v-model="editable.name"
        required
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        class="form-control"
        placeholder="What are you making this vault for?"
        v-model="editable.description"
        required
      />
    </div>
    <div class="mb-3 d-flex justify-content-between align-items-end">
      <div class="w-50 pe-3">
        <label for="" class="form-label">Is this vault private?</label>
        <select
          class="form-control w-100"
          name="isPrivate"
          id="isPrivate"
          v-model="editable.isPrivate"
          required
        >
          <option selected :value="false">No</option>
          <option :value="true">Yes</option>
        </select>
      </div>
      <div class="d-flex w-50 h-50 justify-content-between">
        <button
          class="btn bg-danger darken-10 w-50 me-2"
          type="button"
          @click="resetForm()"
        >
          Reset
        </button>
        <button class="btn bg-success darken-20 w-50 ms-2" type="submit">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop.js'
import { vaultsService } from '../services/VaultsService.js'
import { useRouter } from 'vue-router'
import { Modal } from 'bootstrap'
export default {
  setup() {
    const router = useRouter()
    const editable = ref({})
    return {
      editable,
      async createVault() {
        try {
          await vaultsService.create(editable.value)
          Pop.toast('Vault created!', 'success')
          editable.value = {}
          Modal.getOrCreateInstance(document.getElementById('createVaultModal')).hide()
        }
        catch (error) {
          console.error("[COULD_NOT_CREATE_VAULT]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>