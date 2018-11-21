<template>
  <main-wrap>
    <div @click="testLink">跳转测试</div>
  </main-wrap>
</template>

<script>
import { config } from "./config.js";
import MainWrap from "../../MainWrap/MainWrap";
export default {
  components: {
    MainWrap
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