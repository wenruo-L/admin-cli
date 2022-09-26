<template>
  <div class="block-contail" :class="{ 'block--collapse': isCollapse }">
    <!-- 设置 -->
    <setting></setting>
    <div
      class="block-layout"
      :class="{ 'block-layout--horizontal': isHorizontal }"
    >
      <div class="block-sidebar" v-show="validSidebar">
        <!-- logo -->
        <logo></logo>
        <!-- 左侧导航栏 -->
        <sidebar></sidebar>
      </div>
      <div class="block-main">
        <!-- 顶部导航栏 -->
        <top></top>
        <!-- 顶部标签卡 -->
        <tags></tags>
        <!-- 菜单搜索 -->
        <search
          class="block-view animate__animated animate__zoomIn fast"
          v-show="isSearch"
        ></search>
        <!-- 主体视图层 -->
        <div
          style="flex: auto; overflow-y: auto; overflow-x: hidden"
          id="block-view"
          v-show="!isSearch"
        >
          <keep-alive v-if="isRefresh">
            <router-view class="block-view" :key="key" />
          </keep-alive>
        </div>
        <!-- <div class="block-footer">
          <p class="copyright">@{{ yearText }} {{ website.title }}</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { validatenull } from "@/util/validate";
import admin from "@/util/admin";
import setting from "./setting";
import logo from "./logo";
import sidebar from "./sidebar";
import top from "./top";
import tags from "./tags";
import search from "./search";

export default {
  name: "index",
  components: {
    setting,
    logo,
    sidebar,
    top,
    tags,
    search,
  },
  provide() {
    return {
      index: this,
    };
  },
  data() {
    return {
      isSearch: false,
      yearText: "",
    };
  },
  computed: {
    ...mapGetters(["isHorizontal", "setting", "isRefresh", "isCollapse"]),
    key() {
      return this.$route.path;
    },
    validSidebar() {
      return !(
        (this.$route.meta || {}).menu == false ||
        (this.$route.query || {}).menu == "false"
      );
    },
  },
  created() {
    console.log("this.$router.options.routes", this.$router.options.routes);
    this.yearText = this.$dayjs().year();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$store.commit("SET_SCREEN", admin.getScreen());
      window.onresize = () => {
        setTimeout(() => {
          this.$store.commit("SET_SCREEN", admin.getScreen());
        }, 0);
      };
    },
    //打开菜单
    openMenu(item = {}) {
      //当点击顶部菜单做的事件
      if (!validatenull(item)) {
        let itemActive = {},
          childItemActive = 0;
        //vue-router路由
        if (item.path) {
          itemActive = item;
        } else {
          if (this.menu[childItemActive].length == 0) {
            itemActive = this.menu[childItemActive];
          } else {
            itemActive = this.menu[childItemActive].children[childItemActive];
          }
        }
        this.$router.push({
          path: itemActive.path,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  width: 100px;
  height: 100px;
  background: #000;
}
</style>
