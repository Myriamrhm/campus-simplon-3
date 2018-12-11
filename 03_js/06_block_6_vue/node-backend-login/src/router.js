import Vue from "vue";
import Router from "vue-router";
import auth from "./utils/auth";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: (to, from, next) => {
        if (auth.getLocalToken()) next("/dashboard/me");
        else next();
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      beforeEnter: (to, from, next) => {
        if (!auth.getLocalToken()) next("/login");
        else next();
      },
      children: [
        {
          name: "my-dashboard",
          path: "me",
          component: () =>
            import(/* webpackChunkName: "dashboard-me" */ "./views/DashboardMe.vue")
        },
        {
          name: "user-manager",
          path: "manage-users",
          component: () =>
            import(/* webpackChunkName: "dashboard-users" */ "./views/DashboardUsersManager.vue")
        },
        {
          name: "user-products",
          path: "manage-products",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "./views/DashboardProductsManager.vue")
        }
      ],
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue")
    },
    {
      path: "/404",
      component: () =>
        import(/* webpackChunkName: "pagenotfound" */ "./views/PageNotFound.vue")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
