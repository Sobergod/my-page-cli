<template>
  <main-page>
    <div v-for="(item,index) in test">{{item.id}}</div>
  </main-page>
</template>

<script>
import MainPage from "../../MainPage/MainPage";
import { config } from "./config.js";
export default {
  components: {
    MainPage
  },
  data() {
    return {
      config: config,
      test: []
    };
  },
  created() {
    // console.log(this.$netWork);
    this.getData();
    // this.setTestArray();
  },
  methods: {
    getData() {
      this.$ApiResult
        .getApi("first")
        .then(res => {
          console.log(res);
          this.test = res.shequ;
        })
        .catch(err => {
          console.log(err);
        });
    },
    setTestArray() {
      for (let i = 0; i < 100; i++) {
        this.test.push(i);
      }
    }
  }
};
</script>

<style scoped>
</style>