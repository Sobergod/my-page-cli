<template>
  <div class="contain">
    <div class="mainWrap" ref="mainWrap">
      <transition :name="direction">
        <router-view class="appView" />
      </transition>
    </div>
    <!-- <footer-item ref="footer"></footer-item> -->
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
      direction: "slide-right",
      footerHeight: 0
    };
  },
  created() {},
  methods: {},
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
.contain {
  overflow: hidden;
}
.mainWrap {
  background: #fafafa;
  transition: height 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
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