<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe602;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe601;</span>
      输入城市/景点/游玩</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont arrow-icon">&#xe60e;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String,
  },
};
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: $HeaderHeight
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
      //给边框四角添加弧形过渡效果
      border-radius: .50rem 0rem
      color: #ccc
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color #ffffff
      .arrow-icon
        font-size: .4rem
        margin-left: -.08rem
</style>
