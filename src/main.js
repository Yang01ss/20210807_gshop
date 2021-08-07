// 引入vue
import Vue from "vue";
import App from "./App.vue";
// 引入reset样式
import "../static/css/reset.css";
// 引入路由器
import router from "./router";
// 引入elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
//  $mount() 为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），之后要手动挂载上。 new Vue 时，el和 $mount 并没有本质上的不同。
