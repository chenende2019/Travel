<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item " v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.img"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '001',
        img: 'http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_200x200_151f0405.jpg',
        title: '杭州云曼温泉',
        desc: '云曼温泉能看秀的温泉，泡汤美食赏百秀',
      }, {
        id: '002',
        img: 'http://img1.qunarzz.com/sight/p0/1901/60/601b17dc97036e67a3.water.jpg_200x200_fc8a796c.jpg',
        title: '杭州烂苹果乐园',
        desc: '🔥好评如潮，小伙伴热推景点~',
      }, {
        id: '003',
        img: 'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
        title: '临安大明山滑雪场',
        desc: '踩着雪橇，让我们一起寻找那个来自星星的你',
      }, {
        id: '004',
        img: 'http://img1.qunarzz.com/sight/p0/1812/8d/8dd20c66111af48ea3.img.jpg_200x200_9c16f863.jpg',
        title: '大明山',
        desc: '去不了大明湖，就去大明山',
      }, {
        id: '',
        img: 'http://img1.qunarzz.com/sight/p0/1505/93/93bc1aacad975843.water.jpg_200x200_27557f82.jpg',
        title: '山沟沟',
        desc: '🔥好评如潮，叫上小伙伴一起来山沟沟里躲猫猫',
      }, {
        id: '',
        img: 'http://img1.qunarzz.com/sight/p0/1411/dc/c100d494e06c0e035af4259d6c0b1fe1.water.jpg_200x200_e11fa6ec.jpg',
        title: '航空小镇温泉世界',
        desc: '年轻的朋友看过来',
      }],
    };
  },
};
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
     line-height .8rem
     text-indent .4rem
     background #eee
  .item
     overflow hidden
     display flex
     height 2rem
     border-bottom solid #eee;
     border-bottom-width 0.1px
     .item-img
       width 1.7rem
       height 1.7rem
       padding .15rem .15rem
     .item-info
        flex 1
        padding .15rem
        min-width 0
       .item-title
          line-height .55rem
          font-size .34rem
          ellipsis()
       .item-desc
          line-height .4rem
          color #ccc
          ellipsis()
       .item-button
          line-height .44rem
          margin-top .2rem
          background #ff9300
          padding 0 .2rem
          border-radius .06rem
          color #fff
</style>
