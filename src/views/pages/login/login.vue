<template>
<div class="login-container">
  <div class="login-content-wrapper">
    <button class="btn">登录</button>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {

  },
  mounted () {}
}
</script>
<style lang="scss">
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-content-wrapper {
      width: 520px;
      position: absolute;
      left: 0;
      right: 0;
      top: 120px;
      margin: auto;
      text-align: center;
      button {
        // width: 100%;
        // background: #409eff;
      }
    }
  }
</style>
