<template>
  <a
    :href="link"
    :target="target"
    class="link"
    :class="[`link--${skin}`, `link--${size}`]"
  >
    <span v-if="text && text.length > 0" class="link__content">
      {{ text }}
    </span>

    <slot v-else />
  </a>
</template>

<script lang="ts">
export default {
  name: 'Link',

  props: {
    size: {
      type: [String, null],
      required: false,
      default: 'salamis',
    },
    skin: {
      type: [String, null],
      required: false,
      default: 'alien',
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
      default: '_blank',
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$link($color)
  border-bottom 2px solid $color
  transition all $effects.duration

  &:hover
    border-bottom 2px solid transparent
    background $color

.link
  cursor pointer
  text-decoration none
  display inline

  &--alien
    $link($colors.alien)
    $link(var(--alien))
</style>
