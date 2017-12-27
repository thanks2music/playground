<template>
  <div class="progress">
    <p ref="count" class="progress--count"></p>
    <div class="progress--bar">
      <div ref="bar" class="progress--bar__current"></div>
    </div>
  </div>
</template>

<script>
  const TweenMax = require('gsap/TweenMax.js');
  export default {
    data: function() {
      return {
        firstName: 'Ichiro',
        lastName: 'Yamaguchi',
      }
    },
    computed: {
    },
    mounted: function() {
      const isAnimationTo100 = {
        elem: this.$refs.count,
        percent: 0,
      };
      const isAnimationBar = {
        elem: this.$refs.bar,
      };
      TweenMax.to(isAnimationTo100, 3, {percent: '+=100', roundProps: 'percent', onUpdate: function() {
         isAnimationTo100.elem.innerHTML = isAnimationTo100.percent + '%';
      }, ease: Power4.easeInOut});

      TweenMax.to(isAnimationBar.elem, 3, {xPercent: '100%', ease: Power4.easeInOut});
    },
  }
</script>

<style lang="scss" scoped>
  .progress {
    &--count {
      font-size: 3rem;
      padding: 1rem;
      margin: 0;
      text-align: center;
      font-family: Arial;
    }

    &--bar {
      padding: .5rem;
      margin: .5rem;
      border: 2px solid #fff;
      border-radius: 10px;
      position: relative;
      overflow: hidden;

      &__current {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: #4795ff;
        top: 0;
        left: 0;
        transform: translateX(-100%);
      }
    }
  }
</style>
