import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

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
      path: "/admin/",
      component: () => import(/* webpackChunkName: "about" */ "./views/Admin.vue"),
      children: [
        {
          path: "dashboard",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/admin/Dashboard.vue")
        },
        {
          path: "list-products",
          name: "list-products",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/admin/ListProducts.vue")
        },
        {
          path: "add-product",
          name: "add-product",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/admin/AddProduct.vue")
        }
      ]
    }
  ]
});
