import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "./store";
import website from "@/config/website";

NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
  // 以token存在为登录成功
  if (store.getters.token) {
    if (to.path === "/login") {
      //如果登录成功访问登录页跳转到主页
      next({ path: "/" });
    } else {
      const meta = to.meta || {};
      const query = to.query || {};
      if (meta.target) {
        window.open(query.url.replace(/#/g, "&"));
        return;
      } else if (meta.isTabs !== false) {
        store.commit("ADD_TAG", {
          name: query.name || to.name,
          path: to.path,
          fullPath: to.fullPath,
          params: to.params,
          query: to.query,
          meta: meta,
          parentPath: meta.activeMenu ? meta.activeMenu : "",
        });
      }
      // 等对接接口再添加跳转登录页判断
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to) => {
  console.log("router.afterEach", to);
  let title = to.name ? `${to.name}-${website.title}` : website.title;
  document.title = title;
});
