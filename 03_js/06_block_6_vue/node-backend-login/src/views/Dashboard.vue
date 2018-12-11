<template>
  <section id="dashboard" class="page dashboard">
    <h1 id="title" class="title">Dashboard</h1>

    <nav id="nav_dashboard" class="nav">
      <ul class="list">
        <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/dashboard/me"
        >
          <span>infos</span>
        </router-link>

        <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/dashboard/manage-users"
        >
          <span>manage users</span>
        </router-link>

        <router-link
          exact-active-class="is-selected"
          class="clickable item"
          tag="li"
          to="/dashboard/manage-products"
        >
          <span>manage products</span>
        </router-link>
        <li class="clickable" @click="logout">logout</li>
      </ul>
    </nav>

    <router-view id="dashboard_content"/>
  </section>
</template>

<script>
import auth from "@/utils/auth.js"
export default {
  methods: {
    logout() {
      auth.logUserOut(this);
    }
  }
};
</script>

<style lang="scss" scoped>
#dashboard {
  display: grid;
  grid-template-columns: 160px repeat(5, 1fr);
  grid-template-rows: 32px repeat(5, 1fr);
}
#nav_dashboard {
  grid-column: 1 / 2;

  .list {
    margin: 0;
    align-items: flex-start;
    flex-direction: column;

    .item {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
#title {
  margin: 0;
  line-height: 32px;
  grid-column: 2 / 7;
  grid-row: 1 / 2;
}
#dashboard_content {
  grid-column: 2 / 7;
  grid-row: 2;
}
</style>
