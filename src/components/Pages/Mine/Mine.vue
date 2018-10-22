<template>
  <main-page :title="config.title" :backPath="config.backPath" :navOption="config.navOption">
    hahahahhahahahahahhahahahahh
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
  }
};
</script>

<style scoped>
</style>