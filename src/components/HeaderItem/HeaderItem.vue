<template>
  <div class="header" :style="headerStyle">
    <v-btn class="left-btn" v-if="navOption.hasBack" @click="onBack(backPath)" flat icon color="#fff">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <span class="title">{{title}}</span>
    <v-btn class="right-btn" v-if="navOption.hasOption" flat icon color="#fff">
      <v-icon>more_vert</v-icon>
    </v-btn>

  </div>
</template>

<script>
import { Header } from "../../page.config.js";
import Vue from "vue";
import router from "../../router/index.js";
export default {
  props: {
    title: {
      type: String,
      default: "通用页面头部标题"
    },
    backPath: {
      type: String,
      default: ""
    },
    navOption: {
      type: Object,
      default() {
        return {
          hasBack: true,
          hasSearch: false,
          hasOption: true
        };
      }
    }
  },
  data() {
    return {
      headerStyle: {}
    };
  },
  created() {
    this._setHeaderStyle();
  },
  methods: {
    // 设置头部样式
    _setHeaderStyle() {
      this.headerStyle = Header.style;
      this.hasOption = Header.hasOption;
    },
    onBack(backPath) {
      if (backPath !== "") {
        this.$router.push({
          path: backPath
        });
      } else {
        window.history.go(-1);
      }
    }
  }
};
</script>

<style scoped>
.header {
  position: relative;
  align-items: center;
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
  clear: both;
  background: #aaaaaa;
  transform: scaleY(0.5);
}
.left-btn {
  float: left;
}
.right-btn {
  float: right;
}
</style>