export default {
  title: "陪宠后台管理系统",
  logo: "P",
  key: "patpet", //配置主键,目前用于存储
  indexTitle: "陪宠后台管理系统",
  Authorization: "Authorization",
  //配置首页不可关闭
  isFirstPage: false,
  setting: {
    sidebar: "vertical",
    tag: true,
    collapse: true,
    search: true,
    fullscren: true,
    theme: true,
    color: true,
  },
  fistPage: {
    name: "首页",
    path: "/wel/index",
  },
  //配置菜单的属性
  menu: {
    iconDefault: "icon-caidan",
    label: "label",
    path: "path",
    icon: "icon",
    children: "children",
    query: "query",
    href: "href",
    meta: "meta",
  },
};
