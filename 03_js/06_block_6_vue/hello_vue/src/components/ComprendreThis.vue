<template>
    <div>
        <h1 class="title">Comprendre this</h1>
        <button @click="displayThis('event')">action</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            test: (function getThis(params) {
                return this;
            }())
        }
    },
    methods: {
        displayThis(context) {
            console.log(`this@${context}`);
        }
    },
    created() {
        this.displayThis("created");
    },
    mounted() {
        console.log("this@mounted()", this);
    }
}
</script>
<style lang="scss" scoped>

</style>
