<template>
    <section class="page login">
        <h1 class="title">Login</h1>
        <router-link to="/register"> don't have an account yet ?</router-link>
        <FormLogin />
    </section>
</template>

<script>
import FormLogin from "@/components/FormLogin.vue";
export default {
    components: {
        FormLogin
    }
}
</script>

<style lang="scss" scoped>

</style>
