import { setStore, getStore } from "@/util/store";
const menuList = [
  {
    label: "系统管理",
    path: "/system",
    icon: "#icon-zhanshi",
    children: [
      {
        label: "图片清晰度管理",
        icon: "",
        path: "/photoDefinition",
      },

      {
        label: "测试上传",
        icon: "",
        path: "/testUpload",
      },
      {
        label: "测试crud",
        icon: "",
        path: "/test",
      },
    ],
  },
  {
    label: "贴纸管理",
    path: "/stickers",
    icon: "#icon-wendang",
    children: [
      {
        label: "关键词测试",
        path: "/stickersKeywordTest",
        icon: "",
        component: "views/stickers/stickers-keyword-test",
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
