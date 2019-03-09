<template>
  <ul class="list">
   <li class="item" v-for="item of letters"
       :key="item"
       :ref="item"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       @click="handleLetterClick">
     <b>{{item}}</b></li>
  </ul>
</template>
<script>
export default {
  name: 'CityTag',
  props: {
    cityList: Object,
  },
  computed: {
    letters() {
      const letters = [];
      for (const i in this.cityList) {
        // https://segmentfault.com/q/1010000016469493/a-1020000016469784
        if ({}.hasOwnProperty.call(this.cityList, i)) {
          letters.push(i);
        }
      }
      return letters;
    },
  },
  data() {
    return {
      touchStatus: false,
    };
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        const startY = this.$refs[this.letters[0]][0].offsetTop - 79;
        const touchY = e.touches[0].clientY - 79;
        const index = Math.floor((touchY - startY) / 15);
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index]);
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 0rem
    right 0rem
    bottom 0
    width .4rem
    cursor pointer
    .item
      text-align center
      line-height .3rem
      color $bgColor
      font-size .25rem
</style>
