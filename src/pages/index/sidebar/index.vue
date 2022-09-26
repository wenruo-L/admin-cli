<template>
  <el-scrollbar class="block-menu" v-if="reload">
    <div v-if="hadMenu && !isHorizontal" class="block-sidebar--tip">
      没有发现菜单
    </div>
    <el-menu
      unique-opened
      :default-active="activeMenu"
      :mode="setting.sidebar"
      :collapse="keyCollapse"
    >
      <sidebar-item :menu="menu"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import { validatenull } from "@/util/validate";
import sidebarItem from "./sidebarItem";
export default {
  name: "sidebar",
  components: { sidebarItem },
  inject: ["index"],
  data() {
    return {
      reload: true,
    };
  },
  watch: {
    isHorizontal() {
      this.reload = false;
      this.$nextTick(() => {
        this.reload = true;
      });
    },
  },
  computed: {
    ...mapGetters([
      "isHorizontal",
      "setting",
      "menu",
      "tag",
      "keyCollapse",
      "menuId",
    ]),
    hadMenu() {
      return validatenull(this.menu);
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  created() {
    this.index.openMenu();
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
