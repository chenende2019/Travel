<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-tag></city-tag>
  </div>
</template>
<script>
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
};
</script>
<style lang="stylus" scoped>


</style>
