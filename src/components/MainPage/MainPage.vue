<template>
  <div class="wrap">
    <header-item class="header-item" :class="headerActive" :headerStyle="headerStyle" :style="{'height':headerHeight+'px'}"></header-item>
    <div class="main-box" ref="box" :style="{'height':boxHeight+'px'}">
      <keep-alive>
        <router-view class="appView" />
      </keep-alive>
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
      headerStyle: {},
      boxHeight: null,
      footerHeight: null,
      headerActive: ""
    };
  },
  created() {
    this._setTabBar();
    this._onResize();
    this._setHeadertyle();
    this._boxScroll();
  },
  watch: {
    $route(to, from) {
      console.log(to);
      if (to.meta.isMainPage) {
        this.footerHeight = 50;
        this.boxHeight = this._setBoxHeight(50);
      } else {
        this.footerHeight = 0;
        this.boxHeight = this._setBoxHeight(0);
      }
    }
  },
  methods: {
    _boxScroll() {
      this.$nextTick(() => {
        let boxItem = this.$refs.box;
        const SCROLL_OFFSET = 1;
        this.headerStyle.color = "#fff";
        boxItem.onscroll = () => {
          if (boxItem.scrollTop > SCROLL_OFFSET) {
            this.headerStyle.color = "black";
            // this.headerStyle.backgroundColor = "rgba(0,0,0,0)";
            // this.headerStyle.boxShadow = "unset";
            this.headerActive = "header-active";
            // this.headerHeight = 0;
            // this._setTabBar();
            return;
          } else {
            this.headerStyle.color = "#fff";
            // this.headerStyle.backgroundColor = "#2196F3";
            this.headerActive = "";
            // this.headerHeight = 50;
            // this._setTabBar();
            return;
          }
        };
      });
    },
    _setHeadertyle() {
      this.headerStyle = Header.style;
    },
    _setTabBar() {
      if (this.$route.meta.isMainPage === true) {
        this.footerHeight = 50;
        this.boxHeight = this._setBoxHeight(50);
      } else {
        this.footerHeight = 0;
        this.boxHeight = this._setBoxHeight(0);
      }
    },
    _setBoxHeight(footerHeight) {
      let documentHeight = this.$utils.getDocumentHeight(),
        boxHeight = documentHeight - footerHeight;
      return boxHeight;
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
.header-item {
  position: fixed;
  top: 0;
}
.header-active {
  background-color: rgba(255, 255, 255, 1) !important;
  box-shadow: unset !important;
  transition: background-color 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>