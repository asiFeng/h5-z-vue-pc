import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store';
import echarts from "echarts";
import collapse from "@/components/collapse";


Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.use(ElementUI);
Vue.prototype.$appName="阿肆の程序";
Vue.prototype.$echarts = echarts;

Vue.component("collapse", collapse);


function filterT (value){
  if( value ){
      let d = new Date(value);
      return `${d.getFullYear()}年${d.getMonth()}月${d.getDay()}日 ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
  }
  return '--';
}
Vue.filter('filterTime', filterT);


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



