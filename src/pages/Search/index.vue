<template>
  <div>
    到了搜索页面
    <h1>
      $route.params.keyword:
      {{ $route.params.keyword }}
    </h1>
    <h1>$route.query.k: {{ $route.query.k }}</h1>
    <h1 style="color: blue">直接通过props得到keyword:{{ keyword }}</h1>
  </div>
</template>

<script>
export default {
  props: ["keyword"],
};
</script>

<style lang="less" scoped></style>
