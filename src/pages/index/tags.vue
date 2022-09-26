<template>
  <div class="block-tags" v-if="setting.tag" @click="contextmenuFlag = false">
    <!-- tag盒子 -->
    <div
      v-if="contextmenuFlag"
      class="block-tags__contentmenu"
      :style="{ left: contentmenuX + 'px', top: contentmenuY + 'px' }"
    >
      <div class="item" @click="closeOthersTags">关闭其它</div>
      <div
        class="item"
        v-if="contextmenuRoute != tagWel.path"
        @click="closeAllTags"
      >
        关闭所有
      </div>
    </div>
    <div class="block-tags__box">
      <el-tabs
        v-model="active"
        type="card"
        @contextmenu.native="handleContextmenu"
        :closable="tagLen !== 1"
        @tab-click="openTag"
        @edit="menuTag"
      >
        <el-tab-pane
          v-for="item in tagList"
          :key="item.fullPath"
          :label="getTitle(item)"
          :name="item.fullPath"
        >
          <span slot="label">
            {{ getTitle(item) }}
            <i
              class="el-icon-refresh"
              :class="{ turn: refresh }"
              @click="handleRefresh"
              v-if="active == item.fullPath"
            ></i>
          </span>
        </el-tab-pane>
      </el-tabs>
      <el-dropdown class="block-tags__menu">
        <el-button type="primary" size="mini">
          更多
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="$parent.isSearch = true"
            >搜索</el-dropdown-item
          >
          <el-dropdown-item @click.native="closeOthersTags"
            >关闭其它</el-dropdown-item
          >
          <el-dropdown-item
            @click.native="closeAllTags"
            v-if="contextmenuRoute != tagWel.path"
            >关闭所有</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "tags",
  data() {
    return {
      props: this.website.menu,
      refresh: false,
      active: "",
      contentmenuX: "",
      contentmenuY: "",
      contextmenuFlag: false,
      contextmenuRoute: null, //右键选中的路由地址
    };
  },
  watch: {
    tag: {
      handler(val) {
        this.active = val.fullPath;
      },
      immediate: true,
    },
    contextmenuFlag() {
      window.addEventListener("mousedown", this.watchContextmenu);
    },
  },
  computed: {
    ...mapGetters(["tagWel", "tagList", "tag", "setting"]),
    tagLen() {
      return this.tagList.length || 0;
    },
    labelKey() {
      return this.props.label;
    },
  },
  methods: {
    handleRefresh() {
      this.refresh = true;
      this.$store.commit("SET_IS_REFRESH", false);
      setTimeout(() => {
        this.$store.commit("SET_IS_REFRESH", true);
      }, 100);
      setTimeout(() => {
        this.refresh = false;
      }, 500);
    },
    getTitle(item) {
      return item.name;
    },
    watchContextmenu(event) {
      if (!this.$el.contains(event.target) || event.button !== 0) {
        this.contextmenuFlag = false;
      }
      window.removeEventListener("mousedown", this.watchContextmenu);
    },
    handleContextmenu(event) {
      let target = event.target;
      let flag = false;
      if (target.className.indexOf("el-tabs__item") > -1) flag = true;
      else if (target.parentNode.className.indexOf("el-tabs__item") > -1) {
        target = target.parentNode;
        flag = true;
      }
      if (flag) {
        event.preventDefault();
        event.stopPropagation();
        this.contextmenuRoute = target.id.replace("tab-", "");
        console.log("this.contextmenuRoute", this.tagWel);
        this.contentmenuX = event.clientX;
        this.contentmenuY = event.clientY;
        this.tagName = target.getAttribute("aria-controls").slice(5);
        this.contextmenuFlag = true;
      }
    },
    menuTag(value, action) {
      if (action === "remove") {
        let { tag, key } = this.findTag(value);
        this.$store.commit("DEL_TAG", tag);
        if (tag.fullPath === this.tag.fullPath) {
          // 优化打开多个详情页时页面不能回到对应列表页面的问题
          if (tag.meta.activeMenu) {
            let parentPathIndex = this.tagList.findIndex((item) => {
              return item.fullPath == tag.meta.activeMenu;
            });
            tag =
              parentPathIndex != -1
                ? this.tagList[parentPathIndex]
                : this.tagList[key - 1];
          } else {
            tag = this.tagList[key - 1];
          }
          this.$router.push({
            path: tag.path,
            query: tag.query,
          });
        }
      }
    },
    openTag(item, type = "closeOthers") {
      // console.log('openTag',item)
      let value = type == "closeOthers" ? item : item["_props"].name;

      let { tag } = this.findTag(value);
      // console.log('tag',tag);
      this.$router.push({
        path: tag.path,
        query: tag.query,
      });
      this.$nextTick(() => {
        if (type == "closeOthers") {
          this.contextmenuRoute = null;
        }
      });
    },
    findTag(fullPath) {
      let tag = this.tagList.find((item) => item.fullPath === fullPath);
      let key = this.tagList.findIndex((item) => item.fullPath === fullPath);
      return { tag, key };
    },
    closeOthersTags() {
      this.contextmenuFlag = false;
      this.$store.commit("DEL_TAG_OTHER", this.contextmenuRoute);
      this.openTag(this.contextmenuRoute, "closeOthers");
    },
    closeAllTags() {
      this.contextmenuFlag = false;
      this.$store.commit("DEL_ALL_TAG");
      this.$router.push(this.tagWel);
    },
  },
};
</script>
