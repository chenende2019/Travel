<template>
  <div class="icons">
    <div class="icon" v-for="item in icons" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.url"/>
      </div>
        <p class="icon-font">{{item.text}}</p>
    </div>

    <!--<div class="icon">-->
      <!--<div class="icon-img">-->
        <!--<img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"/>-->
      <!--</div>-->
        <!--<p class="icon-font">热门景点</p>-->
    <!--</div>-->
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
        text: '景点门票',
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
      }],
    };
  },
};
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
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
        box-sizing: border-box
        padding: .1rem
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
        text-align: center
</style>
