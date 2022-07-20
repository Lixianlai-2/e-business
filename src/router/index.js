import VueRouter from "vue-router";
import Vue from "vue";
import Login from "@/pages/Login.vue";
import Register from "../pages/Register.vue";
import Home from "../pages/Home.vue";
import Search from "../pages/Search.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/login",
      component: Login,
      meta: {
        show: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false,
      },
    },
    {
      path: "/search",
      component: Search,
      meta: {
        show: true,
      },
    },
    {
      path: "/home",
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      path: "/",
      redirect: "/home",
      meta: {
        show: false,
      },
    },
  ],
});
