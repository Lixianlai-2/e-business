import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import TypeNav from "./components/TypeNav";
import store from "./store";

// 注意，第一个参数用字符串，或者直接用TypeNav，都是会报错的
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
