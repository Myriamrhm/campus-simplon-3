<template>
    <div id="cousin">
        <span>Je suis cousin</span>
    </div>
</template>
<script>
export default {
    created() {
        this.$ebus.$on("hello-je-pars-en-bus", payload => {
            console.log("payload@Cousin", payload);
        });
    }
}
</script>
<style lang="scss" scoped>
#cousin {
    border: 3px dashed black;
    padding: 5px;
}
</style>
