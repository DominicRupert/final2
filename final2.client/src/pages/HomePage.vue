<template>
  <div class="container-fluid">
    <div class="masonry-with-columns">
    <Keep v-for="keep in keeps" :keep="keep" :key="keep.id" />
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js';
import { keepsService } from '../services/KeepsService.js';
import { computed } from 'vue';
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
export default {
  setup() {
    onMounted(async () => {
      const keeps = await keepsService.getAll();
    })
    return {
      keeps: computed(() => AppState.keeps)
    }
}
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
