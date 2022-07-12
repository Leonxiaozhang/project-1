<template>
    <div>
  <Type-nav/>
  <ListContainer/>
  <TodayRecommend/>
  <rank/>
  <like/>
  <floor v-for="(floor,index) in floorlist" :key="floor.id" :list='floor'/>
  
  <brand/>
    </div>
</template>

<script>
  import ListContainer from './ListContainer'
  import TodayRecommend from './TodayRecommend'
  import rank from './rank'
  import like from './like'
  import floor from './floor'
  import brand from './brand'
  import {mapState} from 'vuex'

    export default {
        components:{
            ListContainer,
            TodayRecommend,
            rank,
            like,
            floor,
            brand,
        },
        mounted(){
        this.$store.dispatch('getfloorlist')
        
        },
        computed:{
          ...mapState({
            floorlist:(state) => state.home.floorlist,
          })
        }
    }
</script>

<style lang="less" scoped>

</style>