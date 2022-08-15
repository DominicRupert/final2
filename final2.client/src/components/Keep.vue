<template>
  <div class="card my-2 selectable elevation-5 w-100" @click="openLgModal">
    <img :src="keep.img" alt="" class="card-img" />
    <div class="card-img-overlay text-light text-shadow d-flex align-items-end">
      <h1 class="fw-light">
        {{ keep.name }}
      </h1>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { keepsService } from '../services/KeepsService.js';
import { AppState } from '../AppState.js';
export default {
    props: {
        keep: {
            type: Object,
            required: true
        }
    
    },
    setup(props){
        return {
            
        }
    }
}
</script>


<style lang="scss" scoped>

</style>