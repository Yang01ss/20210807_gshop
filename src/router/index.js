// 路由器对象模块

import Vue from "vue";
import VueRouter from "vue-router";

// 引入所有路由插件




// import Home from "../pages/Home/Home.vue";
// import Order from "../pages/Order/Order.vue";
// import Search from "../pages/Search/Search.vue";
// import Personal from "../pages/PersonalCenter/Personal.vue";
// 实现路由组件懒加载: 主要是使用import函数
const Home = () => import("../pages/Home/Home.vue");
const Order = () => import("../pages/Order/Order.vue");
const Search = () => import("../pages/Search/Search.vue");
const Personal = () => import("../pages/PersonalCenter/Personal.vue");
//用在一些顶级组件,内容较多并且不是第一时间需要的



import Login from "../pages/Login/Login.vue";
import Shop from "../pages/Shop/Shop.vue";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods.vue";
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings.vue";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo.vue";

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
    {
      path: "/shop",
      component: Shop,
      children: [
        {
          path: "/shop/goods",
          component: ShopGoods,
        },
        {
          path: "/shop/ratings",
          component: ShopRatings,
        },
        {
          path: "/shop/info",
          component: ShopInfo,
        },
        {
          path: "",
          redirect: "/shop/goods",
        },
      ],
    },
  ],
});
