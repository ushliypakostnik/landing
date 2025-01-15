<template>
  <div class="button" :class="[`button--${size}`]">
    <Icon v-if="size === 'kerleise'" name="play-solid_32" />
    <Icon v-else-if="size === 'crotheise'" name="play-solid_20" />
    <Icon v-else name="play-solid_16" />
  </div>
</template>

<script lang="ts">
// Components
import Icon from '@/components/ds/Icon.vue';

export default {
  name: 'ButtonPlayer',

  components: {
    Icon,
  },

  props: {
    size: {
      type: String,
      required: false,
      default: 'kerleise',
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = '.button'

$size($size)
  width $size
  min-width $size
  height $size

{$name}
  @extend $flexCenter
  user-select none
  border-radius 50%
  background $colors.white
  background var(--white)
  $opacity("pudre")

  &:hover
    cursor pointer
    $opacity("odo")

  &:active
    $opacity("pudre")

  &--kerleise
    $size(128px)

  &--crotheise
    $size(80px)

  &--samilea
    $size(40px)
</style>
