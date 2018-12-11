<template>
    <div>
        <h1 class="title">My infos</h1>
        {{ infos }}
    </div>
</template>

<script>

export default {
    computed: {
        infos() {
            return this.$store.getters["user/current"]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
