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
  created() {
    // console.log(this.$netWork);
    this.getData();
  },
  methods: {
    getData() {
      this.$ApiResult
        .getApi("home")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
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
