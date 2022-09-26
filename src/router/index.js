import Vue from "vue";
import VueRouter from "vue-router";
import PagesRouter from "./pages/";
import ViewsRouter from "./views/";

// 处理刷新详情页（自定义刷新）时vue进入重复路由报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const routes = [...PagesRouter, ...ViewsRouter];
console.log("routes", routes);
const router = new VueRouter({
  routes: [...PagesRouter, ...ViewsRouter],
});

export default router;
