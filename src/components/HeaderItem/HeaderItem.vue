<template>
  <div class="header" :style="headerStyle">
    <div class="left-wrap algin_center">
      <v-btn class="left-btn" v-if="navOption.hasBack" @click="onBack(backPath)" flat icon color="#fff">
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
        <v-icon>more_vert</v-icon>
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
  display: flex;
  align-items: center;
  padding: 8px 0;
  height: 40px;
  box-shadow: 0 1px 10px #333;
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
/* 垂直居中 */
.algin_center {
  display: flex;
  align-items: center;
}
.left-wrap {
  flex: 1;
  justify-content: flex-start;
}
.right-wrap {
  flex: 1;
  justify-content: flex-end;
}

.option-btn {
  margin-left: 0px;
}
.title_wrap {
  min-width: 140px;
  max-width: 140px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex: 4;
}
</style>