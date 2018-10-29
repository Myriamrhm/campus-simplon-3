<template>
    <div id="enfant">
        <button @click="$emit('msg-enfant', 
            {msg: 'bonjour papa/maman'})">
            <span>je suis enfant de la famille {{ nomFamille }}</span>
        </button>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$props);
    },
    props: ["nomFamille"]
}
</script>
<style lang="scss" scoped>

</style>
