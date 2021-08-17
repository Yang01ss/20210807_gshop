//  vuex的核心模块store
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 引入配置项
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";



export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
