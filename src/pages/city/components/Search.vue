<template>
  <div>
    <div class="search">
      <input class="search-img" v-model="keyword" type="text" placeholder="请输入要搜索的内容"/>
    </div>
    <div class="search-content" v-show="keyword">
      <ul>
        <li class="search-item" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item" v-show="hanNoDate">没有符合条件的查询结果！</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CiytSearch',
  props: {
    cityList: Object,
  },
  data() {
    return {
      keyword: '',
      timer: null,
      list: [],
    };
  },
  computed: {
    hanNoDate() {
      return !this.list.length;
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      const result = [];
      for (const i in this.cityList) {
        if ({}.hasOwnProperty.call(this.cityList, i)) {
          this.cityList[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
        }
      }
      this.list = result;
      this.timer = setTimeout(() => {
      }, 100);
    },
  },
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
    .search-content
      z-index 1
      position absolute
      top 1.58rem
      left 0
      right 0
      bottom 0
      background #eee
      .search-item
        line-height 0.6rem
        padding-left 0.1rem
        color #666
        background #fff
        border-bottom 0.1rem solid #eee
</style>
