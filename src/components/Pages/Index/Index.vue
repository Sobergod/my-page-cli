<template>
  <main-wrap>
    <div v-for="(item,index) in test">{{item}}</div>
  </main-wrap>
</template>
<script>
import { config } from "./config.js";
import MainWrap from "../../MainWrap/MainWrap";
export default {
  components: {
    MainWrap
  },
  data() {
    return {
      config: config,
      test: []
    };
  },
  created() {
    // console.log(this.$netWork);
    // this.getData();
    this.setTestArray();
  },
  methods: {
    getData() {
      this.$ApiResult
        .getApi("home")
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
.main-wrap {
  padding-top: 50px;
}
</style>