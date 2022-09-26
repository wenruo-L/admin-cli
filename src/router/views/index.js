import Layout from "@/pages/index/index";

export default [
  {
    path: "/wel",
    redirect: "/wel/index",
    component: () => import("@/pages/index/index.vue"),
    children: [
      {
        path: "index",
        name: "首页",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/wel/index"),
      },
    ],
  },
  {
    path: "system",
    redirect: "/photoDefinition",
    component: Layout,
    children: [
      {
        path: "/photoDefinition",
        name: "图片清晰度",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/system/photo-definition.vue"
          ),
      },
      {
        path: "/testUpload",
        name: "测试上传",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/system/test-upload.vue"
          ),
      },
      {
        path: "/testCrud",
        name: "测试CRUD",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/system/test.vue"),
      },
    ],
  },
  {
    path: "stickers",
    redirect: "/stickers/stickers-keyword-test",
    component: Layout,
    children: [
      {
        path: "/stickersKeywordTest",
        name: "关键词测试",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/stickers/stickers-keyword-test.vue"
          ),
      },
    ],
  },
];
