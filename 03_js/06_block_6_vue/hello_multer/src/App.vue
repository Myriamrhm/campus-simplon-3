<template>
  <div id="app">
      <HomeIntro id="intro" />
      <div id="wrap">
          <Doomsday id="doomsday"/>
          <Uploader id="uploader" :mimes="['image/jpeg']" :multiple="true"></Uploader>
      </div>
  </div>
</template>
<script>
import HomeIntro from "@/views/inc/HomeIntro.vue";
import Uploader from "@/components/Uploader.vue";
import Doomsday from "@/components/doomsday/Doomsday.vue";
export default {
  components: {
    HomeIntro,
    Uploader,
    Doomsday
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
#intro {
  grid-column: 1 / 4;
}
#wrap {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-column: 4 / 7;
  align-items: center;
}
#doomsday {

}
#uploader {
  align-self: flex-start;
}
</style>
