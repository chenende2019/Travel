<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCityList" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cityList" :key="key" :ref="key">
        <div class="title">{{key}}</div>
          <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
            <div class="item">{{innerItem.name}}</div>
          </div>
      </div>
    </div>
  </div>

</template>
<script>
import Bscroll from 'better-scroll';

export default {
  name: 'CityList',
  props: {
    hotCityList: Array,
    cityList: Object,
    letter: String,
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const el = this.$refs[this.letter][0];
        this.scroll.scrollToElement(el);
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
  .list
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    bottom 0
    right 0
    .title
      line-height .6rem
      padding-left .2rem
      background #eee
      color #666
      border-top solid 1px #cccccc
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
         float left
         width 33.33%
        .button
              margin .1rem
              padding .1rem 0
              text-align center
              border .02rem solid #cccccc
              border-radius .1rem
    .item-list
      .item
        line-height .4rem
        border-bottom 1px solid #cccccc
        padding .2rem

</style>
