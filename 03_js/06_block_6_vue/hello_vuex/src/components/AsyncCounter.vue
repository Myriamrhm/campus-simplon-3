<template>
    <div>
        <h1 class="title">AsyncCounter</h1>
        {{ count }}
        (double => {{ doubleCount }} )
        <button id="increment" @click="$store.dispatch('asyncIncrement')">incrémenter</button>
        <hr>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.getters.count;
        },
        doubleCount() {
            return this.$store.getters.doubleCount;
        }
    }
}
</script>

<style>

</style>
