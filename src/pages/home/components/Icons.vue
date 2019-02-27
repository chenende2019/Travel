<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url"/>
          </div>
            <p class="icon-font">{{item.text}}</p>
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
  data() {
    return {
      icons: [{
        id: '001',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        text: '景点门票asfdsdfsdadf',
      },
      {
        id: '002',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '一日游',
      },
      {
        id: '003',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        text: '杭州必洲',
      },
      {
        id: '004',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        text: '老和云起',
      },
      {
        id: '005',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        text: '景点赏花',
      },
      {
        id: '006',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        text: '断桥残雪',
      },
      {
        id: '007',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        text: '十里长亭',
      },
      {
        id: '008',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        text: '古刹灵隐',
      },
      {
        id: '009',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        text: '古刹灵隐',
      }],
      swiperOption: {
        pagination: '.swiper-pagination',
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.icons.forEach((item, index) => {
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
