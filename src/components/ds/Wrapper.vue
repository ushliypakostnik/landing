<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
};
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

.wrapper
  max-width $breakpoints.large // 1360px
  padding 0 40px
  margin 0 auto

  +$gadgets()
    max-width 100%
    padding 0 24px
</style>
