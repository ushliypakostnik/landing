<template>
  <button
    type="button"
    class="button"
    :class="[
      `button--${skin}`,
      `button--${size}`,
      isDisabled && 'button--disabled',
      isWide && 'button--wide',
    ]"
  >
    <div class="button__content">
      <slot name="icon" />
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',

  props: {
    size: {
      type: String,
      required: false,
      default: 'helike',
    },
    skin: {
      type: String,
      required: false,
      default: 'primary',
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isWide: {
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
    pointer-events none
    cursor default
    $opacity("biqe")

  &--helike
    padding 10px 16px
    $border-radius("bana")
    $text("sulguni")

  &--polyxo
    padding 4px 8px
    $border-radius("theku")
    $text("briscola")

  &--laripha
    padding 22px 32px
    $border-radius("nemea")
    $text("sulguni")

  &--wide
    width 100% !important

  +$narrow()
    width 100%
</style>
