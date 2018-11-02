<template>
    <div id="parent">
        <span>je suis parent</span>
        
        <Enfant v-on:msg-enfant="action" :nomFamille="'Dubois'"/>
        
        <enfant @msg-enfant="action"  :nomFamille="'Bilali'"></enfant>
        
        <Enfant @msg-enfant="msgActuel = 'toto'"  :nomFamille="'Teng'"></Enfant>

    </div>
</template>
<script>
import Enfant from "./Enfant.vue";

export default {
    updated() {
        console.log(this.msgActuel);
    },
    data() {
        return {
            msgActuel: ""
        }
    },
    components: {
        Enfant
    },
    methods: {
        action(evt) {
            console.log("@parent => je suis trigger par event yo !", evt)
            // console.log("@$ebus ?", this.$ebus);
            this.$ebus.$emit("hello-je-pars-en-bus", {done: true});
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
