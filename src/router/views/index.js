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
    path: "/system",
    redirect: "/menu",
    component: Layout,
    children: [
      {
        path: "/menu",
        name: "菜单管理",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/system/menu.vue"),
      },
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
    path: "/authority",
    redirect: "/authority/role",
    component: Layout,
    children: [
      {
        path: "/role",
        name: "角色管理",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/authority/role.vue"),
      },
    ],
  },
  {
    path: "/company",
    redirect: "/company/department",
    component: Layout,
    children: [
      {
        path: "/department",
        name: "部门管理",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/company/department.vue"
          ),
      },
      {
        path: "/employee",
        name: "员工管理",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/company/employee.vue"
          ),
      },
      {
        path: "/post",
        name: "岗位管理",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/company/post.vue"),
      },
    ],
  },
  {
    path: "/content-management",
    redirect: "/content-management/content",
    component: Layout,
    children: [
      {
        path: "/content",
        name: "内容列表",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/content-management/content.vue"
          ),
      },
      {
        path: "/contentDetail/:id",
        name: "内容详情",
        meta: {
          activeMenu: "/content",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/content-management/content-detail.vue"
          ),
      },
    ],
  },
  {
    path: "/user-management",
    redirect: "/user-management/user",
    component: Layout,
    children: [
      {
        path: "/user",
        name: "用户列表",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/user-management/user.vue"
          ),
      },
      {
        path: "/userDetail/:id",
        name: "内容详情",
        meta: {
          activeMenu: "/user",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/user-management/user-detail.vue"
          ),
      },
    ],
  },
  {
    path: "/special-effect-management",
    redirect: "/special-effect-management/special-effect",
    component: Layout,
    children: [
      {
        path: "/specialEffect",
        name: "特效列表",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/special-effect-management/special-effect.vue"
          ),
      },
      {
        path: "/specialEffectDetail/:id",
        name: "特效详情",
        meta: {
          activeMenu: "/specialEffect",
        },
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/special-effect-management/special-effect-detail.vue"
          ),
      },
    ],
  },
  {
    path: "/stickers",
    redirect: "/stickers/stickers-keyword-test",
    component: Layout,
    children: [
      {
        path: "/stickersManagement",
        name: "贴纸列表",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/stickers/stickers-management.vue"
          ),
      },
      {
        path: "/stickersKeyword",
        name: "关键词管理",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/stickers/stickers-keyword.vue"
          ),
      },
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
