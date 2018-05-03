<template>
  <div class="app-wrapper">
    <aside class="side-container">111</aside>
    <div class="main-container">
      <header>
        <div class="nav-container"></div>
        <div class="tags-container"></div>
      </header>
      <section>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang="scss">
  .app-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .side-container {
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    border: 1px solid #ccc;
  }
  .main-container {
    min-height: 100%;
    border: 1px solid #000;
    margin-left: 180px;
    header {
      width: 100%;
      height: 80px;
      background: #ccc;
      .nav-container {
        height: 50px;
        background: deeppink;
      }
      .tags-container {
        height: 30px;
        background: deepskyblue;
      }
    }
    section {
      width: 100%;
      min-height: 100%;
      background: darkseagreen;
    }
  }
</style>
