<template>
 <div>
   <div class="weekend-title">周末去哪儿</div>
   <ul>
     <li class="item">
       <div class="img-wrapper">
        <img class="item-img" src="http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg"/>
       </div>
       <div class="item-info">
         <p class="item-title">美丽普陀山</p>
         <p class="item-desc">人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化
         </p>
       </div>
     </li>
     <li class="item">
       <div class="img-wrapper">
         <img class="item-img" src="http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg"/>
       </div>
       <div class="item-info">
         <p class="item-title">美丽普陀山</p>
         <p class="item-desc">人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化
         </p>
       </div>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
};

</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'

  .weekend-title
    line-height .8rem
    text-indent .4rem
    background #eee
  .img-wrapper
    overflow hidden
    height 36.6%
    padding 0
  .item-img
    width 100%
  .item-info
    padding .15rem
    border-bottom solid 0.1rem #eee
    .item-title
      line-height .55rem
      font-size .34rem
    .item-desc
      line-height .4rem
      width 7rem
      color #ccc
      margin-bottom .2rem
      ellipsis()
</style>
