import { setStore, getStore } from "@/util/store";
const menuList = [
  {
    label: "系统管理",
    path: "/system",
    icon: "#icon-zhanshi",
    children: [
      {
        label: "菜单管理",
        path: "/menu",
        icon: "",
      },
      {
        label: "图片清晰度管理",
        path: "/photoDefinition",
        icon: "",
      },

      {
        label: "测试上传",
        path: "/testUpload",
        icon: "",
      },
      {
        label: "测试crud",
        path: "/test",
        icon: "",
      },
    ],
  },
  {
    label: "权限管理",
    path: "/authority",
    icon: "#icon-icon--quanxian",
    children: [
      {
        label: "角色管理",
        path: "/role",
        icon: "",
      },
    ],
  },
  {
    label: "基础信息",
    path: "/company",
    icon: "#icon-gangweixinxi",
    children: [
      {
        label: "部门管理",
        path: "/department",
        icon: "",
      },
      {
        label: "员工管理",
        path: "/employee",
        icon: "",
      },
      {
        label: "岗位管理",
        path: "/post",
        icon: "",
      },
    ],
  },
  {
    label: "内容管理",
    path: "/content-management",
    icon: "#icon-jinchumingxi",
    children: [
      {
        label: "内容列表",
        path: "/content",
        icon: "",
      },
    ],
  },
  {
    label: "用户管理",
    path: "/user-management",
    icon: "#icon-techreport-",
    children: [
      {
        label: "用户列表",
        path: "/user",
        icon: "",
      },
    ],
  },
  {
    label: "特效管理",
    path: "/special-effect-management",
    icon: "#icon-wendang",
    children: [
      {
        label: "特效列表",
        path: "/specialEffect",
        icon: "",
      },
    ],
  },
  {
    label: "贴纸管理",
    path: "/stickers",
    icon: "#icon-wendang",
    children: [
      {
        label: "贴纸列表",
        path: "/stickersManagement",
        icon: "",
      },
      {
        label: "关键词管理",
        path: "/stickersKeyword",
        icon: "",
      },
      {
        label: "关键词测试",
        path: "/stickersKeywordTest",
        icon: "",
      },
    ],
  },
];
const userInfoDefault = {
  avatar: "/img/logo.png",
  username: "小动物",
};
const user = {
  state: {
    token: "123",
    // token: getStore({ name: "token" }) || "",
    userInfo: {
      avatar: "/img/logo.png",
      username: "小动物",
    },
    permission: {},
    menu: getStore({ name: "menu" }) || menuList,
  },
  actions: {
    // 登录
    Login({ commit }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "123");
        commit("SET_USERIFNO", userInfoDefault);
        commit("SET_MENU", menuList);
        commit("DEL_ALL_TAG");
        resolve();
      });
    },
    // 登出
    LogOut({ commit }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "");
        commit("SET_USERIFNO", userInfoDefault);
        commit("SET_MENU", []);
        commit("DEL_ALL_TAG");
        resolve();
      });
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      setStore({
        name: "token",
        content: state.token,
      });
    },
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = {};
      permission.forEach((ele) => {
        state.permission[ele] = true;
      });
    },
    SET_MENU: (state, menu) => {
      state.menu = menu;
      setStore({
        name: "menu",
        content: state.menu,
      });
    },
  },
};

export default user;
