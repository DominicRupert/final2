<template>
  <form @submit.prevent="createKeep()" id="createKeepForm">
    <div class="mb-3">
      <label for="name" class="form-label">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        placeholder="Enter the keep's name..."
        v-model="editable.name"
        required
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description:</label>
      <textarea
        class="form-control"
        name="description"
        id="description"
        rows="3"
        placeholder="Explain what this keep is about..."
        v-model="editable.description"
        required
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="img" class="form-label">Image URL:</label>
      <input
        type="text"
        name="img"
        id="img"
        class="form-control"
        placeholder="Enter the URL for the cover image of the keep..."
        v-model="editable.img"
        required
      />
    </div>
    <div class="d-flex justify-content-around">
      <button
        class="btn bg-danger darken-10 w-25"
        type="button"
        @click="resetForm()"
      >
        Reset
      </button>
      <button class="btn bg-success darken-20 w-25" type="submit">
        Submit
      </button>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop.js'
import { keepsService } from '../services/KeepsService.js'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async resetForm() {
        if (Pop.confirm())
          editable.value = {}
      },
      async createKeep() {
        try {
          await keepsService.createKeep(editable.value)
					editable.value = {}
          Pop.toast('Keep Created!', 'success')
        }
        catch (error) {
          console.error("[COULD NOT CREATE KEEP]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>