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
import { TabBar, setTabBar } from "../../page.config.js";
export default {
  components: {
    HeaderItem,
    FooterItem
  },
  props: {
    headerHeight: {
      default: 48,
      type: Number
    }
  },
  data() {
    return {
      boxHeight: window.sessionStorage.getItem("boxHeight"),
      footerHeight: null
    };
  },
  created() {
    this._setTabBar();
    // this._setBoxHeight();
    this._onResize();
  },
  methods: {
    _setTabBar() {
      setTabBar()
        .then(res => {
          for (let i in res.list) {
            if (
              res.list[i].name.toLowerCase() === this.$route.name.toLowerCase()
            ) {
              let listItem = res.list[i];
              if (
                listItem.isMainPage == undefined ||
                listItem.isMainPage == false
              ) {
                return Promise.resolve(0);
              } else {
                return Promise.resolve(50);
              }
            }
          }
        })
        .then(res => {
          if (res) {
            this.footerHeight = res;
            this._setBoxHeight(res);
          } else {
            this.footerHeight = 0;
            this._setBoxHeight(0);
          }
        });
    },
    _setBoxHeight(footerHeight) {
      let documentHeight = this.$utils.getDocumentHeight();
      this.boxHeight = documentHeight - this.headerHeight - this.footerHeight;
      window.sessionStorage.setItem("boxHeight", this.boxHeight);
    },
    // 根据浏览器变化设置内容主体的高度
    _onResize() {
      let resizeTimer = null;
      window.onresize = () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this._setTabBar();
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