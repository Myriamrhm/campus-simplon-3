<template>
  <div id="login_icon">
    <router-link
      id="icon"
      class="clickable far fa-user"
      exact-active-class="is-selected"
      tag="i"
      :to="route"
      exact
    ></router-link>
  </div>
</template>

<script>
import auth from "@/utils/auth";

export default {
  computed: {
    route() {
      return !auth.isLoggedIn() ? "/login" : "/dashboard/me";
    }
  },
  data() {
    return {
      isHover: false
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
#login_icon {
  display: inline-block;
  height: 32px;
}
#icon {
  align-items: center;
  border: 2px solid;
  border-radius: 50%;
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: center;
  width: 32px;
  &:hover {
    border-color: darkorange;
    color: darkorange;
  }
  &.is-selected {
    border-color: #42b983;
    color: #42b983;
  }
}

</style>
