<template>
  <div class="data-progress">
    <el-row :span="24">
      <el-col
        :md="span"
        :xs="24"
        :sm="12"
        v-for="(item, index) in data"
        :key="index"
      >
        <div class="item">
          <a
            :href="item.href ? item.href : 'javascript:void(0);'"
            @click="item.click ? item.click(item) : ''"
            :target="item.target"
          >
            <div class="item-header">
              <count-up
                class="item-count"
                :animation="item.animation || animation"
                :decimals="item.decimals || decimals"
                :end="item.count"
              ></count-up>
              <div class="item-title" v-text="item.title"></div>
            </div>
            <el-progress
              :stroke-width="15"
              :percentage="item.count"
              :color="item.color"
              :show-text="false"
            ></el-progress>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countUp from "@/components/count-up";
export default {
  name: "data-progress",
  components: {
    countUp,
  },
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    animation() {
      return this.option.animation;
    },
    decimals() {
      return this.option.decimals || 0;
    },
    span() {
      return this.option.span || 8;
    },
    data() {
      return this.option.data || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.data-progress {
  .item {
    margin: 10px;
    &-header {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-count {
      line-height: 26px;
      font-size: 26px;
      color: #666;
    }
    &-title {
      color: #999;
      font-size: 14px;
    }
  }
}
</style>
