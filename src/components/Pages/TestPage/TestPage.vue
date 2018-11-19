<template>
    <main-page>
        <div @click="test">测试按钮2</div>
    </main-page>
</template>

<script>
import MainPage from "../../MainPage/MainPage";
export default {
  components: {
    MainPage
  },
  methods: {
    test() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped>
</style>