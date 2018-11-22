<template>
  <div :style="mainWrapStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    paddingTop: {
      default: 50,
      type: Number
    },
    paddingBottom: {
      default: 50,
      type: Number
    }
  },
  computed: {
    mainWrapStyle() {
      return {
        paddingTop: this.paddingTop + "px",
        paddingBottom: this.paddingBottom + "px"
      };
    }
  }
};
</script>

<style scoped>
</style>