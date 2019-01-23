<template lang="html">
<div class="app-container">
<!--头部  -->
<top :seller="seller"></top>
<!-- 导航栏 -->
<div class="tab border-1px">
  <div class="tab-item"><router-link :to="{ name: 'goods', params: {} }" tag='p'>商品</router-link></div>
  <div class="tab-item"><router-link :to="{ name: 'ratings', params: {} }" tag='p'>评论</router-link></div>
  <div class="tab-item"><router-link :to="{ name: 'seller', params: {} }" tag='p'>商家</router-link></div>
</div>
<!-- 内容 -->
<transition ><router-view></router-view></transition>
</div>
</template>

<script>
import top from 'components/header/header.vue';
// alias
export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.getseller();
  },
  methods: {
    getseller() {
      this.$http.get('/api/seller').then(result => {
        // console.log(result.body);
        if (result.body.errno === 0) {
          this.seller = result.body.data;
          // console.log(this.seller);
        }
      });
    }
  },
  components: {
    top
  }
};
</script>
<style lang="stylus" scoped>
@import "./common/stylus/mixin.styl"
  .app-container
    // position: relative
    .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      border-1px(rgba(7,17,27,0.1))
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
.v-enter
  opacity: 0
  transform: translateX(100%)
.v-leave-to
  opacity: 0
  transform: translateX(-100%)
  position: absolute
.v-enter-active,
.v-leave-active
  transition: all .5s ease
// .v-move
//   transition: all 7s ease
// .v-leave-active
//   position: absolute;
</style>
