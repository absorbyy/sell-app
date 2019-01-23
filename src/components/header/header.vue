<template lang="html">
<div class="top-comtainer">
<div class="content-wrapper">
  <img width="64" height="64" :src="seller.avatar" alt="" class="avatar">
  <div class="comment">
    <div class="title">
      <span class="brand"></span>
      <span class="name">{{seller.name}}</span>
    </div>
    <div class="description"><span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span></div>
    <div class="active" v-if='seller.supports'>
      <span class="icon" :class="icon[seller.supports[0].type]" ></span><span class="icon-description">{{seller.supports[0].description}}</span>
    </div>
  </div>
  <div class="badge"  @click="details=!details">
    <span class="badge-count">5个</span>
    <span class="iconfont icon-youjiantou badge-icon" ></span>
  </div>
</div>
<div class="bulliten-wrapper">
  <span class="bulliten-icon"></span><span class="bulliten-content">{{seller.bulletin}}</span>
  <span class="iconfont icon-youjiantou bullitin-icon"   @click="details=!details"></span>
</div>
<div class="background">
  <img :src="seller.avatar" alt="">
</div>
<transition name="fade">
<div class="details" v-show="details">
  <div class="details-wrapper clearfix">
    <div class="details-content">
      <h1>{{seller.name}}</h1>
      <div class="star-wrapper">
          <star :size='48' :score='seller.score'></star>
      </div>
      <div class="title">
        <div class="line"></div>
        <div class="text">优惠信息</div>
        <div class="line"></div>
      </div>
      <div class="details-active">
        <li v-for="item  in seller.supports" :key='item.type' >
          <span class="details-active-icon" :class="icon[item.type]"></span>
          <span class="details-active-description">{{item.description}}</span>
        </li>
      </div>
      <div class="title">
        <div class="line"></div>
        <div class="text">商家公告</div>
        <div class="line"></div>
      </div>
      <div class="details-bulliten">
        {{seller.bulletin}}
      </div>
    </div>
  </div>
  <div class="details-close">
    <span class="iconfont icon-cuowu"  @click="details=!details"  ></span>
  </div>
</div>
</transition>
</div>
</template>

<script>
import star from '../star/star.vue';
export default {
  data() {
    return {
      icon: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      details: false
    };
  },
  components: {
    star
  },
  props: ['seller']

};

</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .top-comtainer
    position: relative
    background: rgba(7,17,27,0.5)
    // color: rgb(255,255,255)
    // filter: blur(10px)
    overflow: hidden
    .content-wrapper
      display: flex
      position:relative
      margin: 24px 18px 12px 24px
      &>img
        border-radius: 4px
      .comment
        margin: 2px 0 2px 16px
        .title
          margin-bottom: 8px
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image(brand)
            background-size: 100% 100%
            background-repeat:no-repeat
          .name
            font-size: 16px
            color: rgb(255,255,255)
            font-weight: bold
            line-height:18px
        .description
          margin-bottom: 8px
          font-size: 14px
          color: rgb(255 255 255)
        .active
          // background-color: red
          .icon
            display:inline-block
            background-size:100% 100%
            vertical-align: top
            width:12px
            height:12px
            &.decrease
              bg-image(decrease_1)
            &.discount
              bg-image(discount_1)
            &.invoice
              bg-image(invoice_1)
            &.special
              bg-image(special_1)
            &.guarantee
              bg-image(guarantee_1)
          .icon-description
            display: inline-block;
            vertical-align: top;
            margin-left:4px
            font-size:10px
            line-height: 12px
            color:rgb(255,255,255)
      .badge
        position: absolute
        margin-bottom: -3px
        padding: 0px 8px
        bottom: 0px
        right: 12px
        height: 24px
        border-radius:14px
        background-color: rgba(0,0,0,0.2)
        .badge-count
          font-size: 10px
          color: rgb(255,255,255)
          line-height: 24px
        .badge-icon
          font-size: 10px
          color: rgb(255,255,255)
    .bulliten-wrapper
      position: relative
      padding: 0 22px 0 12px
      height: 28px
      white-space: nowrap
      color: rgb(255,255,255)
      overflow: hidden
      text-overflow: ellipsis
      .bulliten-icon
        display:inline-block
        vertical-align: middle
        margin-top: -2px
        width: 30px
        height: 18px
        bg-image(bulletin)
        background-size: 100% 100%
      .bulliten-content
        font-size: 10px
        line-height: 23px
        margin-left: 4px
      .bullitin-icon
        position: absolute
        font-size: 10px
        bottom: 8px
        right: 11px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      img
        width: 100%
        height: 100%
        filter: blur(10px)
    .details
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      z-index: 100
      // ios 才有遮罩模糊
      backdrop-filter: blur(10px)
      background-color: rgba(7,17,27,0.8)
      // $.fade-enter-active, $.fade-leave-active
      //   transition: all .5s;
      // $.fade-enter, $.fade-leave-to
      //   opacity: 0;
      .details-wrapper
        color: rgb(255,255,255)
        min-height: 100%
        width:100%
        .details-content
          margin-top: 64px
          padding-bottom: 64px
          h1
            font-size: 32px
            font-weight 700
            text-align: center
          .star-wrapper
            margin: 16px auto 0px auto
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 28px 36px 24px 36px
            .line
              flex: 1
              position: relative
              top: -7px
              border-bottom: 1px solid rgb(255,255,255)
            .text
              padding: 0 12px
              font-weight: 700
          .details-active
            width: 80%
            padding-right: 12px
            margin: 0 auto
            li
              margin-bottom: 12px
              font-size: 0px
              &:last-child
                margin-bottom: 0px
              .details-active-icon
                vertical-align: top
                display:inline-block
                background-size:100% 100%
                width:16px
                height:16px
                &.decrease
                  bg-image(decrease_2)
                &.discount
                  bg-image(discount_2)
                &.invoice
                  bg-image(invoice_2)
                &.special
                  bg-image(special_2)
                &.guarantee
                  bg-image(guarantee_2)
              .details-active-description
                margin-left: 6px
                font-size: 12px
                line-height: 16px
          .details-bulliten
            vertical-align: top
            width: 80%
            padding: 0 12px
            margin: 0 auto
            font-size: 12px
            line-height: 24px
      .details-close
        color: rgb(255,255,255)
        position: relative
        height: 32px
        width: 32px
        line-height:32px
        text-align: center
        clear: both
        margin: -64px auto 0px auto
.fade-enter-active,.fade-leave-active
  transition: all .5s;
.fade-enter,.fade-leave-to
  opacity: 0;
  transform: translateX(100%);

</style>
