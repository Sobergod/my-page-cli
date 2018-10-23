<template>
  <div class="wrap">
    <header-item :title="title" :backPath="backPath" :navOption="navOption" ref="header"></header-item>
    <div class="main-wrap" ref="mainWrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import HeaderItem from "../HeaderItem/HeaderItem";
export default {
  components: {
    HeaderItem
  },
  props: {
    title: {
      type: String,
      default: "通用页面头部标题"
    },
    backPath: {
      type: String,
      default: ""
    },
    navOption: {
      type: Object,
      default() {
        return {
          hasBack: true,
          hasSearch: true,
          hasOption: true
        };
      }
    }
  },
  created() {
    // this._setMainWrapHeight();
  },
  methods: {
    // 设置内容主体的高度
  }
};
</script>

<style scoped>
</style>