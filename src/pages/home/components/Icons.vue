<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
            <p class="icon-font">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <p class="icon-font"></p>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: false,
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  @import '~styles/varibles.styl'
  .icons >>> .swiper.container
    height: 0
    padding-bottom 50%
  .icons >>> .swiper-pagination-bullet-active
    background: $bgColor
  .icons >>> .swiper-pagination
    position: relative
    margin-top: 0.3rem
  .icon
    position: relative
    overflow hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .3rem
      padding: .2rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-font
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .44rem
      height: .44rem
      color: $darkTextColor
      padding-left .2rem
      text-align: center
      ellipsis()
</style>
