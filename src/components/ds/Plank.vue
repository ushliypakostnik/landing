<template>
  <div class="plank">
    <div class="plank__wrapper">
      <div class="plank__left-wrapper">
        <div class="plank__left">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.9231 6.07527C14.359 6.93071 14.359 9.0693 12.9231 9.92473L3.23077 15.6989C1.79487 16.5544 -7.24748e-08 15.4851 0 13.7742L4.89207e-07 2.2258C5.61682e-07 0.514929 1.79487 -0.554363 3.23077 0.301073L12.9231 6.07527ZM11.8462 8L2.15385 2.2258L2.15385 13.7742L11.8462 8Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="plank__center">
        <div class="plank__title">{{ title }}</div>
        <div class="plank__subtitle">{{ subtitle }}</div>
      </div>
      <div class="plank__right">
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.15809 1.53701C0.861443 1.07116 0.998606 0.453029 1.46446 0.156378C1.93031 -0.140274 2.54844 -0.00311095 2.84509 0.46274L5.68702 4.9256C6.10436 5.58098 6.10436 6.41876 5.68702 7.07414L2.84509 11.537C2.54844 12.0029 1.93031 12.14 1.46446 11.8434C0.998606 11.5467 0.861443 10.9286 1.15809 10.4627L3.65798 6.53701C3.86638 6.20938 3.86656 5.79029 3.65798 5.46274L1.15809 1.53701Z"
            fill="#80858E"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Plank',

  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = '.plank'

{$name}
  width 100%
  height 64px
  background $colors.django
  background var(--django)
  cursor pointer
  transition background $effects.duration
  $border-radius("kurza")

  &:active
    background $colors.django
    background var(--django)

  &:hover
    background $colors.djangoHover
    background var(--djangoHover)

    {$name}__title
      color $colors.harakiri
      color var(--harakiri)

    {$name}__subtitle
      color $colors.troy
      color var(--troy)

    {$name}__right svg path
      fill var(--troy)

  &__wrapper
    position relative
    width 100%
    height 100%
    padding-left 52px
    padding-right 34px

  &__right
    @extend $flexCenter
    position absolute
    top 0
    right 16px
    bottom 0

  &__left
    @extend $flexCenter
    background $colors.rocky
    background var(--rocky)
    border-radius 50%
    width 32px
    min-width 32px
    height 32px

    &-wrapper
      position absolute
      left 0
      top 0
      bottom 0
      padding 16px 8px 16px 12px

  &__center
    padding-top 14px

  &__title
    color $colors.troy
    color var(--troy)
    transition color $effects.duration
    $text("sulguni")

  &__subtitle
    color $colors.metropolis
    color var(--metropolis)
    transition color $effects.duration
    $text("briscola")
</style>
