<template lang="pug">
  .bus
    .bus--large(ref='caravan')
</template>

<script>
  require('../assets/img/bus/large.png');

  module.exports = {
    data: function() {
      return {
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bus
    width 50vw
    height 50vh
    position relative

    // .vueに書いたstyleから背景読み込みが出来なかった
    &--large
      width 74px
      height 61px
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
      background-position 0 0
      background-repeat no-repeat
      background-size contain
</style>
