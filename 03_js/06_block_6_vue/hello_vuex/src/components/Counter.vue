<template>
    <div>
        <h1 class="title">Counter</h1>
        {{ count }}
        (double => {{ doubleCount }} )
        <button id="increment" @click="$store.commit('increment')">incrémenter</button>
        <button id="decrement" @click="$store.commit('decrement')">décrémenter</button>
        <hr>
    </div>
</template>

<script>
export default {
    computed: {
        count() { // mode getter
            return this.$store.getters.count;
        },
        doubleCount() { // mode getter
            return this.$store.getters.doubleCount;
        }
    }
}
</script>

<style>

</style>
