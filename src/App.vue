<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
