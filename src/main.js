import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadStyle } from "./util/utils";
import "./permission"; //权限
import "./cache"; //页面缓存
import axios from "./router/axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import patpetCrud from "./lib/patpet-crud/patpet-crud.umd.min.js";
import "./lib/patpet-crud/patpet-crud.css";
import "./styles/common.scss";
import website from "@/config/website";
import dayjs from "dayjs";
import basicContainer from "./components/basic-container/main";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(patpetCrud);
Vue.use(VueAxios, axios);

Vue.component("basicContainer", basicContainer);

Vue.prototype.website = website;
Vue.prototype.$dayjs = dayjs;

// 动态加载阿里云字体库
const iconfontVersion = ["567566_82imxaft0by"];
const iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
iconfontVersion.forEach((ele) => {
  loadStyle(iconfontUrl.replace("$key", ele));
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
