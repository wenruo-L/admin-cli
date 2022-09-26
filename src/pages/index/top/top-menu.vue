<template>
  <div class="top-menu">
    <el-menu :default-active="activeIndex" mode="horizontal" text-color="#333">
      <template v-for="(item, index) in items">
        <el-menu-item
          :index="item.parentId + ''"
          @click.native="openMenu(item)"
          :key="index"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ getTitle(item) }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "top-menu",
  data() {
    return {
      props: this.website.menu,
      activeIndex: "0",
      items: [],
    };
  },
  inject: ["index"],

  computed: {
    ...mapGetters(["tagCurrent", "menu"]),
    labelKey() {
      return this.props.label;
    },
  },
  methods: {
    openMenu(item) {
      this.index.openMenu(item);
    },
    getMenu() {
      this.$store.dispatch("GetTopMenu").then((res) => {
        this.items = res;
      });
    },
    getTitle(item) {
      return item[this.labelKey];
    },
  },
};
</script>
