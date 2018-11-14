<template>
  <div class="footer" :style="tabBar.style">
    <div class="tabbar-list">
      <div class="tabbar-item" v-for="(item,index) in tabBar.list" :key="item.pagePath" @click="navToDetail(item.pagePath)">
        <v-icon v-if="tabBar.iconType === 2" :color="active===item.name?tabBar.selectColor:tabBar.style.color">{{item.icon}}</v-icon>
        <span :style="{color:active===item.name?tabBar.selectColor:tabBar.style.color}">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { TabBar, setTabBar } from "../../page.config.js";
export default {
  name: "FooterItem",
  data() {
    return {
      tabBar: {},
      active: this.$route.name.toLowerCase()
    };
  },
  created() {
    this._setTabBar();
  },
  watch: {
    $route(to, from) {
      this.active = to.name.toLowerCase();
    }
  },
  methods: {
    _setTabBar() {
      setTabBar().then(res => {
        this.tabBar = res;
      });
    },
    // 跳转详情
    navToDetail(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style scoped>
.footer {
  position: relative;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0px -1px 3px#eee;
  overflow: hidden;
}
.tabbar-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.tabbar-item {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
.tabbar-item:after {
  content: "";
  position: absolute;
  width: 1px;
  height: 50%;
  transform: scaleX(0.5);
  background: #eee;
  right: 0;
}
.tabbar-item:last-child::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
}
.tabbar-item span {
  font-size: 14px;
}
</style>