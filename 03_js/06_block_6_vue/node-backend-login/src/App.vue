<template>
  <main id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </main>
</template>
<script>
import Header from "@/views/partials/Header.vue";
import Footer from "@/views/partials/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr 150px;

  & > #header,
  & > #footer, {
    padding: 0 20px;
  }
}
.page {
  padding: 20px;
}
.clickable {
  cursor: pointer;
}
.nav .list {
  padding: 0;
  display: flex;
  list-style: none;
}
.nav .item:hover {
    color: darkorange;
}
.nav .item.is-selected {
  color: #42b983;
}
.nav .item::after {
  content:"  |  ";
  white-space: pre;
  color: #2c3e50;
}
.btn {
  border: 1px solid;
  cursor: pointer;
  height: 32px;
  max-width: 120px;
  outline: none;
}
.input {
  outline: none;
  outline-offset: 0;
  border: 1px solid;
  height: 32px;
  padding-left: 13px;
}
.success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.error {
  color: #721c24 !important;
  background-color: #f8d7da !important;
  border-color: #f5c6cb !important;
}
.warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
.info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
</style>
