<template>
  <div class="wrap" ref="wrap">
    <header-item :title="title" :backPath="backPath" :navOption="navOption" ref="header"></header-item>
    <div class="main-box" ref="box">
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
    footerHeight: {
      type: Number,
      default: 0
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
    this._onResize();
  },
  methods: {
    // 设置内容主体的高度
    _setMainWrapHeight() {
      this.$nextTick(() => {
        let headerHeight = 0,
          footerHeight = 0,
          footer = this.$refs.wrap.parentNode.parentNode.children[1],
          mainWrap = this.$refs.wrap.parentNode;
        if (this.$refs.header.$el) {
          headerHeight = this.$utils.getDomHeight(this.$refs.header.$el);
        }
        footerHeight = this.$utils.getDomHeight(footer);
        let wrapHeight = this.$utils.getDocumentHeight();
        mainWrap.style.height = wrapHeight - footerHeight + "px";
        this.$refs.box.style.height =
          wrapHeight - footerHeight - headerHeight + "px";
      });
    },
    _onResize() {
      let resizeTimer = null;
      window.onresize = () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this._setMainWrapHeight();
        }, 100);
      };
    }
  }
};
</script>

<style scoped>
.wrap {
  height: inherit;
}
.main-box {
  overflow-y: auto;
  transition: height 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
</style>