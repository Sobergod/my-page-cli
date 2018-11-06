<template>
  <div class="header" :style="headerStyle">
    <div class="left-wrap algin_center" v-if="navOption.hasBack">
      <v-btn class="left-btn" @click="onBack(backPath)" flat icon color="#fff">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </div>
    <div class="title_wrap algin_center">
      <span class="font-weight-bold">{{title}}</span>
    </div>
    <div class="right-wrap algin_center">
      <v-btn class="search-btn" v-if="navOption.hasSearch" flat icon color="#fff">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn class="option-btn" v-if="navOption.hasOption" flat icon color="#fff">
        <v-icon>more_horiz</v-icon>
      </v-btn>
    </div>
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
      default: Header.title
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
          hasSearch: true,
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
  z-index: 999;
  box-sizing: border-box;
  position: relative;
  padding: 0 16px;
  height: 48px;
  max-height: 48px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
/* 1px 边框 */
.header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0px;
  width: 100%;
  clear: both;
  background: #aaaaaa;
  transform: scaleY(0.5);
}
/* 垂直居中 */
.algin_center {
  display: inline-flex;
  vertical-align: top;
  height: 100%;
}
.left-wrap {
  margin-left: -16px;
}
.option-btn {
  margin-left: 0px;
}
.title_wrap {
  font-size: 17px;
}
.title_wrap span {
  display: flex;
  align-items: center;
}
.right-wrap {
  float: right;
  margin-right: -16px;
}
</style>