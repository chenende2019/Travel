<template>
  <div class="search">
    <input class="search-img" type="text" placeholder="请输入要搜索的内容"/>
  </div>
</template>
<script>
export default {
  name: 'CiytSearch',
};
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
    .search
      line-height 0.1rem
      background $bgColor
      padding 0 .1rem .1rem
      .search-img
        box-sizing border-box
        line-height .62rem
        width 100%
        border-radius .05rem
        text-align center
        color #666
        padding 0 .1rem
</style>
