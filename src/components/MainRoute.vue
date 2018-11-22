<template>
  <div class="contain">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from "./MainPage/MainPage";
export default {
  name: "MainRoute",
  components: {
    MainPage
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.contain {
  overflow: hidden;
}
</style>