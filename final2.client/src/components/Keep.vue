<template>
<!-- //TODO add function -->
<div class="card">
<img :src="keep.img" class="card-img" alt="">
<div class="card-img-overlay">
<h1>{{keep.name}}</h1>
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