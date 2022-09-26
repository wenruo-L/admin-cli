import { setStore, getStore } from "@/util/store";
import website from "@/config/website";

const common = {
  state: {
    isCollapse: false,
    isFullScren: false,
    isMenu: true,
    isRefresh: true,
    screen: -1,
    colorName: getStore({ name: "colorName" }) || "#409EFF",
    themeName: getStore({ name: "themeName" }) || "default",
    setting: website.setting,
  },
  mutations: {
    SET_COLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    SET_IS_MENU: (state, menu) => {
      state.isMenu = menu;
    },
    SET_IS_REFRESH: (state, refresh) => {
      state.isRefresh = refresh;
    },
    SET_FULLSCREN: (state) => {
      state.isFullScren = !state.isFullScren;
    },
    SET_SCREEN: (state, screen) => {
      state.screen = screen;
    },
    SET_COLOR_NAME: (state, colorName) => {
      state.colorName = colorName;
      setStore({
        name: "colorName",
        content: state.colorName,
      });
    },
    SET_THEME_NAME: (state, themeName) => {
      state.themeName = themeName;
      setStore({
        name: "themeName",
        content: state.themeName,
      });
    },
  },
};

export default common;
