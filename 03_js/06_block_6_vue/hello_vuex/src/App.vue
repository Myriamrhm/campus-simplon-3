<template>
  <div id="app">
    <h1 class="title">Vuex</h1>
    <p>
      read the doc : https://vuex.vuejs.org/<br>
    </p>
    <Counter></Counter>
    <AsyncCounter></AsyncCounter>
    <VuexModule></VuexModule>
  </div>
</template>
<script>
import Counter from "@/components/Counter.vue";
import AsyncCounter from "@/components/AsyncCounter.vue";
import VuexModule from "@/components/VuexModule.vue";

export default {
  components: {
    Counter,
    AsyncCounter,
    VuexModule
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
