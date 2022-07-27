<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    // 向服务器要三级联动的数据，放在这里的好处，就是只请求一次
    this.$store.dispatch("home/categoryList");
  },
};
</script>

<style></style>
