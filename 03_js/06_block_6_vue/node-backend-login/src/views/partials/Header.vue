<template>
  <header id="header">
    <img
      id="logo"
      class="clickable"
      alt="Vue logo"
      src="@/assets/logo.png"
      @click="$router.push('/')"
    >
    <nav id="nav_main" class="nav">
      <ul class="list">
        <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/"
          exact
        >Home</router-link>
        <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/about"
          exact
        >About</router-link>
        <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/contact"
          exact
        >Contact</router-link>
      </ul>
    </nav>
    <i id="burger" class="clickable fas fa-bars"></i>
    <LoginIcon />
  </header>
</template>

<script>
import LoginIcon from "@/components/LoginIcon.vue";

export default {
  components: {
    LoginIcon
  }
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #2c3e50;
}
#logo {
  height: 48px;
}
#nav_main {
  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
@media (min-width: 320px) and (max-width: 600px) {
  #burger {
    display: block;
  }
  #nav_main {
    display: none;
  }
}
@media (min-width: 600px) {
  #burger {
    display: none;
  }
  #nav_main {
    display: block;
  }
}
</style>
