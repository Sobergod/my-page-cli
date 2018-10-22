<template>
    <div class="footer" :style="footerStyle">
        <div class="tabbar-list">
            <div class="tabbar-item" v-for="(item,index) in tabBarList" :key="index" @click="navToDetail(item.pagePath)">
                <i v-if="iconType === 0" :class="active===item.name?item.icon:item.selectIcon"></i>
                <img v-else-if="iconType === 1"></img>
                <v-icon v-else-if="iconType === 2">{{item.icon}}</v-icon>
                <span>{{item.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { TabBar } from "../../page.config.js";
export default {
  data() {
    return {
      footerStyle: {},
      tabBarList: [],
      iconType: 0,
      active: this.$router.name
    };
  },
  created() {
    this._setFooterStyle();
    this._setTabBarList();
  },
  methods: {
    _setFooterStyle() {
      this.footerStyle = TabBar.style;
      this.iconType = TabBar.iconType;
    },
    _setTabBarList() {
      this.tabBarList = TabBar.list;
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
  height: 50px;
  box-shadow: 0px -1px 3px#eee;
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