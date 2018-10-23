<template>
  <div>
    <div ref="mainWrap">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {},
  methods: {}
};
</script>

<style>
html {
  /* box-sizing: content-box; */
  overflow: hidden;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
body {
  margin: 0;
}
</style>
