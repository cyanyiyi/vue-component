<template>
  <div class="side-container">
    <div>菜单1</div>
    <div>菜单2</div>
    <div>菜单3</div>
    <div>菜单4</div>
  </div>
</template>
<script>
export default {
  name: 'side-menu',
  props: [],
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  @import '../../styles/mixin.scss';
  .side-container {
    width: 180px;
  }
</style>
