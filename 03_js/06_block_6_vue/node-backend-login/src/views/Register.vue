<template>
    <section class="page register">
        <h1 class="title">Register</h1>
        <router-link to="/login"> already registered ?</router-link>
        <FormRegister />
    </section>
</template>

<script>
import FormRegister from "@/components/FormRegister.vue";
export default {
    components: {
        FormRegister
    }
}
</script>

<style lang="scss" scoped>

</style>
