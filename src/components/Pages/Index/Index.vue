<template>
  <!-- <main-page :title="config.title" :navOption="config.navOption">
    <div v-for="(item,index) in test">{{index}}hahahahhahaha</div>
  </main-page> -->
  <div>123123</div>
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