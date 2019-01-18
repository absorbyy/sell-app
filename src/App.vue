<template lang="html">
<div class="app-container">
<!--头部  -->
<top></top>
<!-- 导航栏 -->
<div class="aaa">
aaa
</div>
<div class="tab">
  <div class="tab-item"><router-link :to="{ name: 'goods', params: {} }" tag='p'>商品</router-link></div>
  <div class="tab-item"><router-link :to="{ name: 'ratings', params: {} }" tag='p'>评论</router-link></div>
  <div class="tab-item"><router-link :to="{ name: 'seller', params: {} }" tag='p'>商家</router-link></div>
</div>
<!-- 内容 -->
<router-view></router-view>
</div>
</template>

<script>
import top from 'components/header/header.vue';
// alias
export default {
  data () {
    return {

    };
  },
  components: {
    top
  }
};
</script>
<style lang="stylus" scoped>
  .app-container
    .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      .tab-item
          flex:1
          text-align:center
          &>p
            width:100%
            margin:0
            font-size:14px
            color:rgb(77,85,93)
            &.act
              color:red

</style>
