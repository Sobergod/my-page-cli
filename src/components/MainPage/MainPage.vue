<template>
  <div>
    <header-item :title="title" :backPath="backPath" :navOption="navOption" ref="header"></header-item>
    <div class="main-wrap" ref="mainWrap">
      <slot></slot>
    </div>
    <footer-item ref="footer"></footer-item>
  </div>
</template>

<script>
import HeaderItem from "../HeaderItem/HeaderItem";
import FooterItem from "./FooterItem";
export default {
  components: {
    FooterItem,
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
    this._setMainWrapHeight();
  },
  methods: {
    // 设置内容主体的高度
    _setMainWrapHeight() {
      this.$nextTick(() => {
        let documentHeight = this.$utils.getDocumentHeight(),
          headerHeight = this.$utils.getDomHeight(this.$refs.header.$el),
          footerHeight = this.$utils.getDomHeight(this.$refs.footer.$el);
        this.$refs.mainWrap.style.height =
          documentHeight - headerHeight - footerHeight + "px";
      });
    }
  }
};
</script>

<style scoped>
.main-wrap {
  overflow: auto;
  background: #eeeeee;
}
</style>