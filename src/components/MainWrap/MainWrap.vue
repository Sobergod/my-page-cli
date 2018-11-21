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
    }
  },
  computed: {
    mainWrapStyle() {
      return {
        paddingTop: this.paddingTop + "px"
      };
    }
  }
};
</script>

<style scoped>
</style>