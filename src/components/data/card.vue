<template>
  <div class="data-card">
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
            <img :src="item.src" class="item-img" />
            <div class="item-text" :style="{ backgroundColor: bgText }">
              <h3 :style="{ color: colorText }">{{ item.name }}</h3>
              <p :style="{ color: colorText }">{{ item.text }}</p>
            </div>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "data-card",
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
    colorText() {
      return this.option.colorText || "#fff";
    },
    bgText() {
      return this.option.bgText || "#2e323f";
    },
    borderColor() {
      return this.option.borderColor || "#2e323f";
    },
  },
};
</script>

<style lang="scss" scoped>
.data-card {
  $height: 340px;
  .item {
    position: relative;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 230px;
    height: $height;
    overflow: hidden;
    border-radius: 5px;
    border-color: #fff;
    border-width: 1px;
    border-style: solid;
    &:hover .item-text {
      top: 0;
    }
  }
  .item-img {
    width: 100%;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .item-text {
    position: absolute;
    top: 150px;
    padding: 20px 15px;
    width: 100%;
    height: $height;
    overflow: auto;
    box-sizing: border-box;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    opacity: 0.9;
    transition: top 0.4s;
    & > p {
      font-size: 12px;
      line-height: 25px;
      text-indent: 2em;
    }
  }
}
</style>
