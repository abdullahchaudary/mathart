<script>
import ArtGen from '../helpers/artgen.js';

export default {
    data () {
        return {
            //
            artGen: null,
        }
    },
    methods: {
        //
    },
    mounted(){
        //
        const canvas = document.getElementById("artCanvas");
        this.artGen = new ArtGen(canvas);
    }
}
</script>

<template>
    <div class="canvasContainer">
        <canvas id="artCanvas"></canvas>
    </div>
</template>

<style scoped>
.canvasContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000;
}
</style>
