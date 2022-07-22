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
    console.log(this);
  },
};
</script>

<style></style>
