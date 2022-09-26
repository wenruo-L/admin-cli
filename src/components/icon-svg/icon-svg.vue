<template>
  <div class="icon-svg">
    <svg
      class="icon-symbol"
      v-if="iconText.indexOf('#') === 0"
      aria-hidden="true"
    >
      <use :xlink:href="iconText"></use>
    </svg>
    <i :class="iconText" v-else></i>
  </div>
</template>

<script>
export default {
  name: "icon-svg",
  props: {
    iconText: String,
  },
};
</script>

<style lang="scss" scoped>
.icon-svg {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: relative;
  .icon-symbol {
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    background-size: 18px 18px;
    margin: 0 auto;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
