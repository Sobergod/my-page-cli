<template>
  <main-page>
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
      config: config,
      test: []
    };
  },
  created() {
    this.setTestArray();
  },
  methods: {
    setTestArray() {
      for (let i = 0; i < 10; i++) {
        this.test.push(i);
      }
    }
  }
};
</script>

<style scoped>
</style>