import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel.vue";

import store from "./store";
// 在入口文件引入，就相当于把mockServe的代码在这里执行了一次
import "@/mock/mockServe";
// 引入swiper的css样式，swiper存在于node_modules里面
import "swiper/css/swiper.css";

// 注意，第一个参数用字符串，或者直接用TypeNav，都是会报错的
Vue.component(TypeNav.name, TypeNav);
// 注册轮播图全局组件
Vue.component(Carousel.name, Carousel);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
