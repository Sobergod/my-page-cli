<template>
  <main-page>
    <div @click="testLink">跳转测试</div>
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
        path: "/submine"
      });
    }
  }
};
</script>

<style scoped>
</style>