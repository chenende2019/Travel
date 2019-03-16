<template>
  <div>
    <city-header></city-header>
    <city-search :cityList="cityList"></city-search>
    <city-list :hotCityList="hotCityList" :cityList="cityList" :letter="letter"></city-list>
    <city-tag :cityList="cityList" @change="handleLetterChange"></city-tag>
  </div>
</template>
<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/list';
import CityTag from './components/Tag';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityTag,
  },
  data() {
    return {
      hotCityList: [],
      cityList: {},
      letter: '',
    };
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      const result = res.data;
      if (result.ret && result.data) {
        const data = result.data;
        this.hotCityList = data.hotCities;
        this.cityList = data.cities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>
<style lang="stylus" scoped>


</style>
