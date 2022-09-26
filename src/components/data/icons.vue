<template>
  <div class="data-icons">
    <el-row :span="24">
      <template v-for="(item, index) in data">
        <el-col :xs="12" :sm="6" :md="span" :key="index">
          <div class="item" :class="[{ 'item--easy': discount }]">
            <a
              :href="item.href ? item.href : 'javascript:void(0);'"
              @click="item.click ? item.click(item) : ''"
              :target="item.target"
            >
              <div class="item-icon" :style="{ color: color }">
                <i :class="item.icon"></i>
              </div>
              <div class="item-info">
                <span>{{ item.title }}</span>
                <count-up
                  :animation="item.animation || animation"
                  :decimals="item.decimals || decimals"
                  :style="{ color: color }"
                  class="count"
                  :end="item.count"
                ></count-up>
              </div>
            </a>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import countUp from "@/components/count-up";
export default {
  name: "data-icons",
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
      return this.option.span || 4;
    },
    data() {
      return this.option.data;
    },
    color() {
      return this.option.color || "rgb(63, 161, 255)";
    },
    discount() {
      return this.option.discount || false;
    },
  },
};
</script>

<style lang="scss" scoped>
.data-icons {
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    margin: 10px 15px;
  }
  .item-icon {
    margin-top: 3px;
    margin-right: 0 !important;
    text-align: center;
    & > i {
      font-size: 46px !important;
    }
  }
  .item-info {
    text-align: center;
    padding: 10px 0;
    & > span {
      display: block;
      padding: 5px 0;
      color: #999;
      font-size: 12px;
    }
    .count {
      font-size: 20px;
      line-height: 25px;
    }
  }
  .item--easy {
    flex-direction: column;
    & > .item-icon {
      margin: 0;
    }
    & > .item-info {
      margin-top: -15px;
      & > span {
        font-size: 14px;
      }
    }
  }
}
</style>
