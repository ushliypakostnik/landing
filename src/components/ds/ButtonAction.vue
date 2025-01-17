<template>
  <a
    class="button"
    :class="[`button--${size}`, isDisabled && 'button--disabled']"
    :style="[color && `color: var(--${color})`]"
  >
    <slot />
  </a>
</template>

<script lang="ts">
export default {
  name: 'ButtonAction',

  props: {
    size: {
      type: String,
      required: false,
      default: 'sulguni',
    },
    color: {
      type: [String, null],
      required: false,
      default: null,
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = '.button'

{$name}
  @extend $button
  transition background $effects.duration

  &--disabled
    @extend $button--disabled

  &--sulguni
    $text("sulguni")

  &--briscola
    $text("briscola")
</style>
