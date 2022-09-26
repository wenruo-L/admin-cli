<template>
  <div class="data-operatext">
    <el-row :span="24">
      <el-col
        v-for="(item, index) in data"
        :key="index"
        :md="span"
        :xs="24"
        :sm="12"
      >
        <div class="item">
          <a
            :href="item.href ? item.href : 'javascript:void(0);'"
            @click="item.click ? item.click(item) : ''"
          >
            <div
              class="item-header"
              :style="{
                backgroundColor: item.color,
                backgroundImage: `url(${item.colorImg})`,
              }"
            >
              <span class="item-title">{{ item.title }}</span>
              <span class="item-subtitle">{{ item.subtitle }}</span>
            </div>
            <div class="item-content">
              <div class="item-img">
                <img :src="item.img" alt="" />
              </div>
              <div class="item-list">
                <div
                  class="item-row"
                  v-for="(citem, cindex) in item.list"
                  :key="cindex"
                >
                  <span class="item-label">{{ citem.label }}</span>
                  <span class="item-value">{{ citem.value }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "data-operaText",
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    span() {
      return this.option.span || 6;
    },
    data() {
      return this.option.data || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.data-operatext {
  .item {
    a {
      color: #333;
    }
    margin: 5px 10px;
    box-sizing: border-box;
    position: relative;
    border-radius: 3px;
    background: #ffffff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    &-header {
      padding: 20px 20px 60px 20px;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      color: #fff;
      background-position: center center;
    }
    &-title {
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 25px;
      font-weight: 300;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      display: block;
    }
    &-subtitle {
      font-size: 14px;
      font-weight: 400;
    }
    &-content {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      border-top: 1px solid #f4f4f4;
      padding: 10px 10px 20px 10px;
      background-color: #fff;
    }
    &-img {
      margin: -60px auto 5px auto;
      width: 90px;
      height: 90px;
      border-radius: 100%;
      overflow: hidden;
      border: 4px solid #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
    }
    &-row {
      box-sizing: border-box;
      width: 33.33%;
      text-align: center;
    }
    &-label {
      margin-bottom: 5px;
      display: block;
      font-weight: 600;
      font-size: 16px;
    }
    &-value {
      display: block;
      font-weight: 300;
      text-transform: uppercase;
    }
  }
}
</style>
