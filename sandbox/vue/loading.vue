<template>
  <div class="bus">
    <div ref="caravan" class="bus--large"></div>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bus {
    width: 50vw;
    height: 50vh;
    position: relative;
    background: #222;

    &--large {
      $size: 148px, 122px;
      width: nth($size, 1) / 2;
      height: nth($size, 2) / 2;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: {
        image: url('../../images/bus/large.png');
        position: 0 0;
        repeat: no-repeat;
        size: contain;
      }
    }
  }
</style>
