// Mutations -- 直接操作数据
import Vue from "vue";
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USER_INFO,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS,
  RECEIVE_SHOPGOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCTH_SHOPS,
} from "./mutationType";

export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address;
  },
  [RECEIVE_FOODTYPES](state, { foodtypes }) {
    state.foodtypes = foodtypes;
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops;
  },
  [RECEIVE_USERINFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {};
  },
  [RECEIVE_SHOPINFO](state, { info }) {
    state.info = info;
  },
  [RECEIVE_SHOPGOODS](state, { goods }) {
    state.goods = goods;
  },
  [RECEIVE_SHOPRATINGS](state, { ratings }) {
    state.ratings = ratings;
  },

  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      Vue.set(food, "count", 1); // 添加的数据带有数据绑定
      // 将food添加到cartFoods中
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },

  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {
      //只有有值才减
      food.count--;
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },
  // 清空购物车
  [CLEAR_CART](state) {
    // 清除food中的count
    state.cartFoods.forEach((food) => (food.count = 0));
    // 移除购物车中的所有项
    state.cartFoods = [];
  },
  [RECEIVE_SEARCTH_SHOPS](state, { searchShops }) {
    state.searchShops = searchShops;
  },
};
