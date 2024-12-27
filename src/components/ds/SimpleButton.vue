<template>
  <button
    type="button"
    class="button"
    :class="[
      `button--${skin}`,
      `button--${size}`,
      isDisabled && 'button--disabled',
      isRounded && 'button--rounded',
    ]"
    :style="[
      background && `background: var(--${background})`,
      color && `color: var(--${color})`,
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SimpleButton',

  props: {
    size: {
      type: [String, null],
      required: false,
      default: 'monithei',
    },
    skin: {
      type: [String, null],
      required: false,
      default: 'primary',
    },
    background: {
      type: [String, null],
      required: false,
      default: null,
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
    isRounded: {
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

{$name}--primary
  @extend $button--primary

{$name}
  @extend $button
  transition background $effects.duration

  &--disabled
    @extend $button--disabled

  &--larishae
    padding 10px
    $border-radius("bana")

  &--monithei
    padding 8px
    $border-radius("theku")

  &--spelino
    padding 4px
    $border-radius("rajol")

  &--rounded
    border-radius 50%
</style>
