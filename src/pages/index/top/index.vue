<template>
  <div class="block-top">
    <div class="top-bar__left">
      <div
        class="block-breadcrumb"
        :class="[{ 'block-breadcrumb--active': isCollapse }]"
        v-if="setting.collapse && !isHorizontal"
      >
        <i class="icon-navicon" @click="setCollapse"></i>
      </div>
    </div>
    <div class="top-bar__title">
      <span class="top-bar__item" v-if="setting.search">
        <top-search></top-search>
      </span>
    </div>
    <div class="top-bar__right">
      <el-tooltip
        v-if="setting.color"
        effect="dark"
        content="换色"
        placement="bottom"
      >
        <div class="top-bar__item">
          <top-color></top-color>
        </div>
      </el-tooltip>
      <el-tooltip
        v-if="setting.theme"
        effect="dark"
        content="主题"
        placement="bottom"
      >
        <div class="top-bar__item top-bar__item--show">
          <top-theme></top-theme>
        </div>
      </el-tooltip>
      <el-tooltip
        v-if="setting.fullscren"
        effect="dark"
        :content="isFullScren ? '退出全屏' : '全屏'"
        placement="bottom"
      >
        <div class="top-bar__item">
          <i
            :class="isFullScren ? 'icon-tuichuquanping' : 'icon-quanping'"
            @click="handleScreen"
          ></i>
        </div>
      </el-tooltip>
      <img class="top-bar__img" :src="userInfo.avatar" />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userInfo.username }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/">首页</router-link>
          </el-dropdown-item>
          <!-- <el-dropdown-item>
            <router-link to="/info/index">个人信息</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/info/setting">个人设置</router-link>
          </el-dropdown-item> -->
          <el-dropdown-item @click.native="logout" divided>
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { fullscreenToggel, listenfullscreen } from "@/util/utils";
import admin from "@/util/admin";
import topSearch from "./top-search";
import topTheme from "./top-theme";
import topColor from "./top-color";
export default {
  components: {
    topSearch,
    topTheme,
    topColor,
  },
  name: "top",
  data() {
    return {};
  },
  filters: {},
  created() {},
  mounted() {
    listenfullscreen(this.setScreen);
  },
  computed: {
    ...mapGetters([
      "setting",
      "userInfo",
      "isFullScren",
      "tagWel",
      "tagList",
      "isCollapse",
      "tag",
      "logsLen",
      "logsFlag",
      "isHorizontal",
      "screen",
    ]),
  },
  methods: {
    handleScreen() {
      fullscreenToggel();
    },
    setCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
    setScreen() {
      this.$store.commit("SET_FULLSCREN");
    },
    logout() {
      this.$confirm("退出系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$store.dispatch("LogOut").then(() => {
          admin.logoutText.bind(this)();
          this.$router.replace({ path: "/login" });
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
