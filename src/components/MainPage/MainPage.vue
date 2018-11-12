<template>
  <div class="wrap">
    <header-item :style="{'height':headerHeight+'px'}"></header-item>
    <div class="main-box" ref="box" :style="{'height':boxHeight+'px'}">
      <slot></slot>
    </div>
    <footer-item ref="footer" :style="{'height':footerHeight+'px'}"></footer-item>
  </div>
</template>

<script>
import HeaderItem from "../HeaderItem/HeaderItem";
import FooterItem from "../FooterItem/FooterItem";
import { Header } from "../../page.config.js";
export default {
  components: {
    HeaderItem,
    FooterItem
  },
  data() {
    return {
      headerHeight: 48,
      footerHeight: 50,
      boxHeight: 0
    };
  },
  created() {
    this._setBoxHeight();
    this._onResize();
  },
  methods: {
    _setBoxHeight() {
      let documentHeight = this.$utils.getDocumentHeight() || 0,
        headerHeight = this.headerHeight || 0,
        footerHeight = this.footerHeight || 0;
      this.boxHeight = documentHeight - headerHeight - footerHeight;
    },
    // 设置内容主体的高度
    _onResize() {
      let resizeTimer = null;
      window.onresize = () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this._setBoxHeight();
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