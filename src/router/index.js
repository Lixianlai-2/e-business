import VueRouter from "vue-router";
import Vue from "vue";
import Login from "@/pages/Login/index.vue";
import Register from "../pages/Register/index.vue";
import Home from "../pages/Home/index.vue";
import Search from "../pages/Search/index.vue";

Vue.use(VueRouter);
// 保存原来的push方法
let originPush = VueRouter.prototype.push;

let originReplace = VueRouter.prototype.replace;

// 重写push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // 这里要绑定this的原因是，如果直接调用originPush，
    // 那么它的this就是undefined,在非严格模式下回被转成window
    // 而window中是没有originPush这个方法的。
    // 把originPush的this绑定，那么就是调用VueRouter的原型上的originPush方法
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 重写replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // 这里要绑定this的原因是，如果直接调用originReplace，
    // 那么它的this就是undefined,在非严格模式下回被转成window
    // 而window中是没有originReplace这个方法的。
    // 把originReplace的this绑定，那么就是调用VueRouter的原型上的originReplace方法
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

export default new VueRouter({
  routes: [
    {
      path: "/login",
      component: Login,
      meta: {
        show: false,
      },
      name: "login",
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false,
      },
    },
    {
      path: "/search/:keyword",
      component: Search,
      meta: {
        show: true,
      },
      name: "search",
      props: true,
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
