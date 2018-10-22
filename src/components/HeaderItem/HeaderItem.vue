<template>
  <div class="header" :style="headerStyle">
    <v-btn v-if="hasOption" flat icon color="#fff">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <span>一级页面顶部</span>
    <v-btn v-if="hasOption" flat icon color="#fff">
      <v-icon>more_vert</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { Header } from "../../page.config.js";
import Vue from "vue";
import router from "../../router/index.js";
export default {
  data() {
    return {
      headerStyle: {},
      hasOption: false
    };
  },
  created() {
    this._setHeaderStyle();
  },
  methods: {
    // 设置头部样式
    _setHeaderStyle() {
      let vue = new Vue({
        router
      });
      console.log(vue);
      this.headerStyle = Header.style;
      this.hasOption = Header.hasOption;
    }
  }
};
</script>

<style scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 8px 5px;
  box-sizing: border-box;
  height: 40px;
}
/* 1px 边框 */
.header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background: #aaaaaa;
  transform: scaleY(0.5);
}
</style>