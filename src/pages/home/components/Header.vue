<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe602;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe601;</span>
      输入城市/景点/游玩</div>
    <div class="header-right">城市
      <span class="iconfont arrow-icon">&#xe60e;</span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
};
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .7rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background: #ffffff
      border-radius: .5rem 0rem
      color: #ccc
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .4rem
        margin-left: -.08rem
</style>
