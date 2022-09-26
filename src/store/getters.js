const getters = {
  tag: (state) => state.tags.tag,
  tagList: (state) => state.tags.tagList,
  tagWel: (state) => state.tags.tagWel,
  language: (state) => state.common.language,
  setting: (state) => state.common.setting,
  colorName: (state) => state.common.colorName,
  themeName: (state) => state.common.themeName,
  isRefresh: (state) => state.common.isRefresh,
  isHorizontal: (state, getters) => getters.setting.sidebar === "horizontal",
  isCollapse: (state) => state.common.isCollapse,
  keyCollapse: (state, getters) =>
    getters.screen > 1 ? getters.isCollapse : false,
  screen: (state) => state.common.screen,
  isFullScren: (state) => state.common.isFullScren,
  isMenu: (state) => state.common.isMenu,
  token: (state) => state.user.token,
  menu: (state) => state.user.menu,
  permission: (state) => state.user.permission,
  userInfo: (state) => state.user.userInfo,
};

export default getters;
