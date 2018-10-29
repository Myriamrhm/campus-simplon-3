<template>
    <div id="square" @click="isBlack = !isBlack" 
        :style="{'background': isBlack ? 'black' : 'purple'}">
    </div>
</template>
<script>
export default {
    data() {
        return {
            isBlack: false
        }
    }
}
</script>
<style>
#square {
    height: 220px;
    width: 220px;
    margin: auto;
}
</style>
