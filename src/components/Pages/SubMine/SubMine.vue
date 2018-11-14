<template>
  <main-page>
    <div @click="test1">测试按钮1</div>
    <!-- <v-layout v-for="(item,index) in test" :key="index">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout> -->
  </main-page>
</template>

<script>
import MainPage from "../../MainPage/MainPage";
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
    test1() {
      this.$router.push({
        path: "/test"
      });
    },
    setTestArray() {
      for (let i = 0; i < 10; i++) {
        this.test.push(i);
      }
    }
  }
};
</script>

<style scoped>
</style>