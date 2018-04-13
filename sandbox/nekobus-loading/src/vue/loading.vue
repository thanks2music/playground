<template lang="pug">
  .bus
    .bus--images
      .bus--large.bus--image(ref='caravan')
      .bus--kids1.bus--image(ref='kids1')
      .bus--cat.bus--image
      .bus--kids2.bus--image
      .bus--girl.bus--image
      .bus--dog.bus--image
      .bus--man.bus--image
</template>

<script>
  require('gsap/TweenMax.js');
  module.exports = {
    data: function() {
      return {
      }
    },
    mounted: function() {
      const tl = new TimelineMax();
      const isAnimationBus = {
        kids1: this.$refs.kids1,
        kids1duration: 1,
      };
      tl
        .to(isAnimationBus.kids1, 1.2, {x: -50})
        .to(isAnimationBus.kids1, 0.3, {y: '-=5'}, '-=1.5')
        // .to(isAnimationBus.kids1, 1.5, {y: -5, ease: Power2.easeInOut, yoyo: true, repeat: -1})
        .to(isAnimationBus.kids1, 1.5, {y: -25, x: -90, ease: Back.easeInOut.config(2)}, '+=1.5');

    },
  }
</script>

<style lang="stylus" scoped>
  .bus
    width 50vw
    height 50vh
    position relative

    &--images
      width 148px
      height 122px
      position absolute
      left 50%
      top 100%
      transform translate(-50%, -50%)

    &--image
      background-position 0 0
      background-repeat no-repeat
      background-size contain
      position absolute
</style>
