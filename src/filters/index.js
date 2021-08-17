import Vue from "vue";
// 引入moment
// import moment from "moment";
import format from 'date-fns/format'
// 自定义过滤器
Vue.filter("dataFormat", function(value, formatStr = "YYYY-MM-DD HH:mm;ss") {
  return format(value,formatStr);
});
