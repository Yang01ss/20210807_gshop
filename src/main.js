// 引入vue
import Vue from "vue";
import App from "./App.vue";
// 引入mintui
import { Button } from "mint-ui";
// 引入reset样式
import "../static/css/reset.css";
// 引入路由器
import router from "./router";
// 引入store
import store from "./store";
// 引入lazyload
import VueLazyLoad from "vue-lazyload";

// 加载mockjs ,保证执行即可
import "./mock/MockServer";
// 加载过滤器
import "./filters";
// 引入gif图片
import loading from "./common/imgs/loading.gif";
// 使用lazyload
Vue.use(VueLazyLoad, {
  //内部自定义一个指令v-lazy
  loading,
});

Vue.config.productionTip = false;
// 注册minttui
Vue.component(Button.name, Button);
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
//  $mount() 为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），之后要手动挂载上。 new Vue 时，el和 $mount 并没有本质上的不同。
