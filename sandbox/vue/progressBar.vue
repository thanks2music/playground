<template>
  <div class="progress">
    {{ progress }}
  </div>
</template>

<script>
  export default {
    data() {
      return( {
        progress: 'Progress',
      });
    },
  }
</script>

<style lang="scss" scoped>
  .progress {
    color: blue;
  }
</style>
