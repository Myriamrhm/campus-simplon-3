<template>
    <div class="my-hello" @click="action"> {{ msg || defaultMsg }}</div>
    <!-- ci-dessus interpolation de la var msg !!! -->
    <!-- Vue va chercher la valeur dans le composant @ this.data.msg-->
</template>
<script>
export default {
    data() {
        return {
            defaultMsg: "hello world of vue"
        }
    },
    methods: {
        action() {
            console.log("j'ai été clické !!!");
        },
        // ci-dessous, des syntaxes alternatives...
        // action: () => {

        // },
        // action: function() {

        // }
    },
    props: ["msg"]
    // la prop msg est envoyée depuis le composant parent
}
</script>

<style lang="scss" scoped>
.my-hello {
    background: orange;
    color: white;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
}
</style>
