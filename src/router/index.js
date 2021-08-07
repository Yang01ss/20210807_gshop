// 路由器对象模块

import Vue from "vue";
import VueRouter from "vue-router";

// 引入所有路由插件
import Home from "../pages/Home/Home.vue";
import Order from "../pages/Order/Order.vue";
import Search from "../pages/Search/Search.vue";
import Personal from "../pages/PersonalCenter/Personal.vue";
import Login from "../pages/Login/Login.vue";

// 使用插件

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/order",
      component: Order,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/search",
      component: Search,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/personal",
      component: Personal,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
