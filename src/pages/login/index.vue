<template>
  <div class="login-container" @keyup.enter="handleLogin">
    <top-color v-show="false"></top-color>
    <div class="login-time">
      {{ time }}
    </div>
    <div class="login-weaper">
      <div class="login-left animate__animated animate__fadeInLeft">
        <img class="img" src="/img/logo.png" alt="" />
        <p class="title">{{ website.title }}</p>
      </div>
      <div class="login-border animate__animated animate__fadeInRight">
        <div class="login-main">
          <h4 class="login-title">登录{{ website.title }}</h4>
          <user-login></user-login>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userLogin from "./user-login.vue";
import topColor from "@/pages/index/top/top-color";
export default {
  name: "login",
  components: {
    userLogin,
    topColor,
  },
  data() {
    return {
      time: "",
      Timer: null,
    };
  },
  created() {
    this.getTime();
    this.Timer = setInterval(() => {
      this.getTime();
    }, 1000);
  },
  mounted() {},
  beforeDestroy() {
    clearInterval(this.Timer);
    this.Timer = null;
  },
  methods: {
    getTime() {
      this.time = this.$dayjs().format("YYYY年MM月DD日 HH:mm:ss");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
