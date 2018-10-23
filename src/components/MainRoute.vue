<template>
  <div>
    <div class="mainWrap" ref="mainWrap">
      <transition :name="direction">
        <router-view class="appView" />
      </transition>
    </div>
    <footer-item ref="footer"></footer-item>
  </div>
</template>

<script>
import FooterItem from "./FooterItem/FooterItem";
export default {
  name: "MainPage",
  components: {
    FooterItem
  },
  data() {
    return {
      direction: "slide-right"
    };
  },
  created() {
    this._setMainWrapHeight();
    this._onResize();
    console.log(this.$router.options);
  },
  methods: {
    _setMainWrapHeight() {
      this.$nextTick(() => {
        let documentHeight = this.$utils.getDocumentHeight(),
          footerHeight = this.$utils.getDomHeight(this.$refs.footer.$el);
        this.$refs.mainWrap.style.height = documentHeight - footerHeight + "px";
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
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.path == "/") {
        this.direction = "slide-right";
      } else if (from.path == "/") {
        this.direction = "slide-left";
      } else {
        this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
      }
    }
  }
};
</script>

<style scoped>
.mainWrap {
  background: #fafafa;
  transition: height 0.2s ease-in-out;
}
.appView {
  position: absolute;
  width: 100%;
  transition: opacity 0.2s ease-out;
}
.slide-left-enter {
  opacity: 1;
}
.slide-left-leave-active {
  opacity: 0;
}
.slide-right-enter {
  opacity: 1;
}
.slide-right-leave-active {
  opacity: 0;
}
</style>