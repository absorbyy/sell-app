<template lang="html">
  <div class="goods-container">
      <div class="goods-left">
        <ul>
          <li class="goods-left-list" v-for="item in goods" :key='item.name'>
            <span class="text border-1px">
              <span class="icon" v-if="item.type>0" :class="icon[item.type]"></span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="goods-right">
        <div class="goods-right-wrapper" v-for = "item in goods " :key="item.name" >
          <h1 class="goods-title">{{item.name}}</h1>
          <div class="goods-item border-1px" v-for = "food in item.foods" :key="food.name">
            <img :src="food.icon" alt="" class="goods-icon">
            <div class="goods-content">
              <h1 class="goods-name">{{food.name}}</h1>
              <p class="goods-description">{{food.description}}</p>
              <p class="goods-sell">月售:{{food.sellCount}} <span class="goods-sell-rating"> 好评{{food.rating}}%</span></p>
              <p>
                <span class="goods-price">￥</span><span>{{food.price}}</span><span v-show="food.oldPrice!==''">￥</span><span v-show="food.oldPrice!==''">{{food.oldPrice}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [],
      icon: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      this.$http.get('/api/goods').then(result => {
        console.log(result.body);
        if (result.body.errno === 0) {
          this.goods = result.body.data;
          console.log(this.goods);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .goods-container
    display: flex
    position: absolute
    width: 100%
    top: 172px
    bottom: 46px
    // background-color: red
    overflow: hidden
    .goods-left
      flex: 0 0 80px
      // 安卓兼容 要写width
      width: 80px
      .goods-left-list
        display: table;
        width: 56px
        height: 54px
        padding: 0 12px
        background-color: #f3f5f7
        .text
          display: table-cell
          vertical-align: middle;
          font-size:  12px
          color: black
          border-1px( rgba(7,17,27,0.1) )
          height: 14px
          .icon
            display:inline-block
            background-size:100% 100%
            background-repeat: no-repeat;
            vertical-align: top
            margin-right: 2px
            width:12px
            height:12px
            &.decrease
              bg-image(decrease_3)
            &.discount
              bg-image(discount_3)
            &.invoice
              bg-image(invoice_3)
            &.special
              bg-image(special_3)
            &.guarantee
              bg-image(guarantee_3)
    .goods-right
      flex: 1
      .goods-right-wrapper
        .goods-title
          height: 26px
          width: 100%
          padding-left: 12px
          border-left: 2px solid #d9dde1
          background-color: #f3f5f7
          font-size: 12px
          line-height:26px
        .goods-item
          display: flex
          margin: 18px
          padding-bottom: 18px
          border-1px( rgba(7,17,27,0.1) )
          &:last-child
            border-none()
          .goods-icon
            flex: 0 0 60px
            margin-right: 10px
            width: 60px
            height: 60px
          .goods-content
            flex: 1
            margin-top: 2px
            .goods-name
              margin-bottom: 8px
              font-size: 14px
              color: rgb(7,17,27)
              font-weight:700
            .goods-description
              margin-bottom: 8px
              font-size: 10px
              color: rgb(147,153,159)
              font-weight:500
            .goods-sell
              margin-bottom: 8px
              font-size: 10px
              color: rgb(147,153,159)
              font-weight:500
              .goods-sell-rating
                margin-left: 12px


</style>
