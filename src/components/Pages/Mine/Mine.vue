<template>
  <div @click="testLink">跳转测试</div>
</template>

<script>
import { config } from "./config.js";
export default {
  components: {
    
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