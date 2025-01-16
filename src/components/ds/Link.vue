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
      type: String,
      required: false,
      default: 'salamis',
    },
    skin: {
      type: String,
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

.link
  color $colors.harakiri
  color var(--harakiri)
  cursor pointer
  text-decoration none
  display inline

  &:hover
    border-bottom 2px solid transparent

  &--alien
    $link($colors.alien)
    $link(var(--alien))

    &:hover
      background $colors.alien
      background var(--alien)
</style>
