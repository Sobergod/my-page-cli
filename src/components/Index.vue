<template>
    <main-page>
        <div v-for="(item,index) in test">{{index}}</div>
    </main-page>
</template>

<script>
import MainPage from "./MainPage/MainPage";
export default {
  components: {
    MainPage
  },
  data() {
    return {
      test: []
    };
  },
  created() {
    this.setTestArray();
  },
  methods: {
    setTestArray() {
      for (let i = 0; i < 1000; i++) {
        this.test.push(i);
      }
    }
  }
};
</script>

<style scoped>
</style>