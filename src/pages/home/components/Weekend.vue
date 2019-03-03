<template>
 <div>
   <div class="weekend-title">周末去哪儿</div>
   <ul>
     <li class="item" v-for="item of list" :key="item.id">
       <div class="img-wrapper">
        <img class="item-img" :src="item.imgUrl"/>
       </div>
       <div class="item-info">
         <p class="item-title">{{item.title}}</p>
         <p class="item-desc">{{item.desc}}</p>
       </div>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array,
  },
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
