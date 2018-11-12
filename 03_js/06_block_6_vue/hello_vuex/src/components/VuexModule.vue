<template>
    <div>
        <h1 class="title">Vuex Modules</h1>
        <p>
            doc: https://vuex.vuejs.org/guide/modules.html
        </p>
        <ul>
            <li v-for="(p, n) in products" :key="n">
                {{ p.name  }}
                {{ p.price }} <span>&euro;</span>
            </li>
        </ul>
        <hr>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.getters["products/all"]
        }
    }
}
</script>

<style>

</style>
