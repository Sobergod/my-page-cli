<template>
  <main-page :title="config.title" :backPath="config.backPath" :navOption="config.navOption">
    hahahahhahahahahahhahahahahh
    <div @click="testLink">跳转详情页</div>
  </main-page>
</template>

<script>
import MainPage from "../../MainPage/MainPage";
import { config } from "./config.js";
export default {
  components: {
    MainPage
  },
  data() {
    return {
      config: config
    };
  },
  methods: {
    testLink() {
      this.$router.push({
        path: "/a"
      });
    }
  }
};
</script>

<style scoped>
</style>