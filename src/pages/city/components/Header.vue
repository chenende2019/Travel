<template>
  <div class="header">
     城市选择
    <router-link to="/">
      <div class="iconfont header-icon">&#xe602;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
};
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
    .header
      position relative
      overflow hidden
      height $HeaderHeight
      line-height $HeaderHeight
      text-align center
      background $bgColor
      color #ffffff
      font-size .32rem
      .header-icon
        width .64rem
        text-align center
        font-size .7rem
        position absolute
        top 0
        left 0
        color #ffffff
</style>
