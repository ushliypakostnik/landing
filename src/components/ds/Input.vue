<template>
  <input class="control" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'Input',

  props: {
    placeholder: {
      type: [String, null],
      required: false,
      default: 'helike',
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = '.control'

{$name}
  @extend $mediumShadow
  width 100%
  padding 10px 16px
  color $colors.harakiri
  color var(--harakiri)
  background $colors.amelie
  background var(--amelie)
  border none
  $border-radius("bana")
  $text("sulguni")

  &::placeholder
    color $colors.metropolis
    color var(--metropolis)
</style>
