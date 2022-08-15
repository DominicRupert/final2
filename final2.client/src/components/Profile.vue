<template>
  <div class="col-12 mt-4">
    <div class="row">
      <div class="col-12 text-start">
        <div class="d-flex">
          <img :src="activeUser.picture" class="rounded me-4 pp" />
          <div class="row">
            <div class="col-12 text-start">
              <h3 class="comfortaa pt-2">
                {{ activeUser.name }}
              </h3>
              <p class="fs-5 comfortaa mb-1">
                Keeps: {{ activeUsersKeeps?.length }}
              </p>
              <p class="fs-5 comfortaa">
                Vaults: {{ activeUsersVaults?.length }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { profilesService } from '../services/ProfilesService.js'
export default {


  setup() {

    return {
      activeUser: computed(() => AppState.activeProfile),
      activeUsersKeeps: computed(() => AppState.activeUsersKeeps),
      activeUsersVaults: computed(() => AppState.activeUsersVaults)
    }
  }
}
</script>


<style lang="scss" scoped>
.pp {
  height: 140px;
  width: 140px;
}
</style>