<template>
  <div>
    <div ref="mainWrap">
      <router-view />
    </div>
    <footer-item ref="footer"></footer-item>
  </div>
</template>

<script>
import FooterItem from "./components/FooterItem/FooterItem";
export default {
  name: "App",
  components: {
    FooterItem
  },
  created() {
    this._setMainWrapHeight();
  },
  methods: {
    _setMainWrapHeight() {
      this.$nextTick(() => {
        let documentHeight = this.$utils.getDocumentHeight(),
          footerHeight = this.$utils.getDomHeight(this.$refs.footer.$el);
        this.$refs.mainWrap.style.height = documentHeight - footerHeight + "px";
      });
    }
  }
};
</script>

<style>
html {
  /* box-sizing: content-box; */
  overflow-y: auto;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
body {
  margin: 0;
}
</style>
