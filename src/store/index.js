import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    footerHeight: 0,
    headerHeihgt: 0,
    headerText: "我的app",
};
const mutations = {

};
const actions = {

};

export default new Vuex.Store({
    state,
    mutations,
    actions
})