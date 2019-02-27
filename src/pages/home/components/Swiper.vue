<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: {
          delay: 300000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        effect: 'fade',
      },
      swiperList: [{
        id: '001',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/13/e1188b0d0f21b902.jpg_750x200_f85c782a.jpg',
      }, {
        id: '002',
        url: 'http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg',
      }, {
        id: '003',
        url: 'http://img1.qunarzz.com/piao/fusion/1806/8b/2680212fadf30002.jpg_750x200_f85409ac.jpg',
      }, {
        id: '004',
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/61c3b6dc2a3b1593e82667a5d92a6706.jpg_750x200_1ec098e6.jpg',
      }],
    };
  },
};
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wrapper
    overflow hidden
    width: 100%
    height: 0
    padding-bottom: 26.7%
    background: #eee
    .swiper-img
      width: 100%
</style>
