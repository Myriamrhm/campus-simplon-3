<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/users">User</router-link> | 
      <router-link to="/parent-enfant">Parent/Enfant</router-link> |
      <router-link to="/do-ajax">Ajax</router-link>
    </div>
    <router-view/>
    <footer></footer>
  </div>
</template>
<script>
export default {
  // beforeCreate() {
  //   console.log(this);
  // }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding: 20px;
}
#nav {
  padding: 20px 20px 20px 0;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// .warning-box {
//   background-color: #fff3cd;
//   border: 1px solid;
//   border-color: #ffeeba;
//   border-radius: 0.3rem;
//   color: #856404;
//   padding: 6px;
// }
.clickable {
    cursor: pointer;
}
</style>
