<template lang="html">
  <div class="star-wrapper" :class="starType">
    <span v-for="(itemClass,i) in itemClasses" :key='i' :class="itemClass" class="star-item"></span>
    <!-- <span  :class="itemClass" class="star-item"></span> -->
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_OFF = 'off';
const CLS_HALF = 'half';
const CLS_ON = 'on';
export default {
  data() {
    return {
    };
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      // console.log(result);
      return result;
    }
  },
  props: ['size', 'score']
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
  .star-wrapper
    font-size: 0
    .star-item
      display: inline-block
      background-report: noreport
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size:100% 100%
        &:last-child
          margin-right: 0px
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 16px
        background-size:100% 100%
        &:last-child
          margin-right: 0px
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size:100% 100%
        &:last-child
          margin-right: 0px
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')

</style>
