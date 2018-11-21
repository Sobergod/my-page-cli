<template>
  <div @click="test">测试按钮2</div>
</template>

<script>
export default {
  components: {},
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