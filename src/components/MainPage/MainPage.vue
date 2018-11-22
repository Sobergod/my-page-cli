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
    this._setHeadertyle();
    this._boxScroll();
  },
  watch: {
    $route(to, from) {}
  },
  methods: {
    _boxScroll() {
      this.$nextTick(() => {
        let boxItem = window.document;
        const SCROLL_OFFSET = 1;
        this.headerStyle.color = "#fff";
        boxItem.onscroll = () => {
          let scrollTop = document.documentElement.scrollTop;
          if (scrollTop > SCROLL_OFFSET) {
            console.log(1);
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
          }
        };
      });
    },
    _setHeadertyle() {
      this.headerStyle = Header.style;
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
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>