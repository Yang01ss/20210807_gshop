// Actions --通过mutations间接操作数据

import {
  reqAdress,
  reqFoodTypes,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqSearchShop,
} from "../api";
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USER_INFO,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPRATINGS,
  RECEIVE_SHOPINFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCTH_SHOPS,
} from "./mutationType";

export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqAdress(geohash);
    commit(RECEIVE_ADDRESS, { address: result.data });
  },
  async getFoodTypes({ commit }) {
    const result = await reqFoodTypes();
    commit(RECEIVE_FOODTYPES, { foodtypes: result.data });
  },
  async getShops({ commit, state }) {
    const { latitude, longitude } = state;
    const result = await reqShops({ latitude, longitude });
    commit(RECEIVE_SHOPS, { shops: result.data });
  },
  // 同步接收用户信息
  saveUserInfo({ commit }, userInfo) {
    commit(RECEIVE_USERINFO, { userInfo });
  },
  // 异步读取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo();
    if (result.code === 0) {
      const userInfo = result.data;
      commit(RECEIVE_USERINFO, { userInfo });
    }
  },
  // 异步登出
  async logout({ commit }) {
    const result = await reqLogout();
    if (result.code === 0) {
      commit(RESET_USER_INFO);
    }
  },
  // 异步获取商家信息
  async getShopInfo({ commit }) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIVE_SHOPINFO, { info });
    }
  },
  // 异步获取商品信息
  async getShopGoods({ commit }, callback) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_SHOPGOODS, { goods });
      // 数据更新,通知组件
      callback && callback();
    }
  },
  // 异步获取评价信息
  async getShopRatings({ commit }, callback) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_SHOPRATINGS, { ratings });
      // 数据更新,通知组件
      callback && callback();
    }
  },

  //同步更新food中的count值
  UpdateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food });
    } else {
      commit(DECREMENT_FOOD_COUNT, { food });
    }
  },

  // 同步清空购物车
  clearCart({ commit }) {
    commit(CLEAR_CART);
  },
  // 异步获取搜索的商家信息
  async searchShops({ commit, state }, keywords) {
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqSearchShop(geohash, keywords);
    if (result.code === 0) {
      const searchShops = result.data;
      commit(RECEIVE_SEARCTH_SHOPS, { searchShops });
    }
  },
};
