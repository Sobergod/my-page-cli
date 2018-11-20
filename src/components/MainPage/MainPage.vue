<template>
  <div class="wrap">
    <header-item :class="headerActive" :headerStyle="headerStyle" :style="{'height':headerHeight+'px'}"></header-item>
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
  methods: {
    _boxScroll() {
      this.$nextTick(() => {
        let boxItem = this.$refs.box;
        const SCROLL_OFFSET = 50;
        this.headerStyle.color = "#fff";
        boxItem.onscroll = () => {
          if (boxItem.scrollTop > SCROLL_OFFSET) {
            this.headerStyle.color = "black";
            // this.headerStyle.backgroundColor = "rgba(0,0,0,0)";
            // this.headerStyle.boxShadow = "unset";
            this.headerActive = "header-active";
            // this.headerHeight = 0;
            // this._setTabBar();
          } else {
            console.log(Header.style.color);
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
    },
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
      this.boxHeight = documentHeight - this.headerHeight - footerHeight;
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
.header-active {
  background-color: rgba(0, 0, 0, 0) !important;
  box-shadow: unset !important;
  transition: background-color 0.6s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
}
</style>