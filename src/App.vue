<template>
  <main-route></main-route>
</template>

<script>
import MainRoute from "./components/MainRoute";
export default {
  name: "App",
  components: {
    MainRoute
  },
  created() {
    // console.log(this.$netWork);
    // this.getData();
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
  /* box-sizing: content|-box; */
  overflow: auto;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  background: indianred;
}
body {
  margin: 0;
}
</style>
