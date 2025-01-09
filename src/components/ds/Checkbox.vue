<template>
  <div class="checkbox__wrapper">
    <input v-model="control" class="checkbox__input" type="checkbox" />

    <label
      ref="width"
      class="checkbox__label"
      :class="{
        'checkbox__label--checked': control,
      }"
      @click="control = !control"
    >
      <div class="checkbox__border">
        <div class="checkbox__border-inner" />
        <div class="checkbox__image" />
      </div>

      <div class="checkbox__text">
        <span>{{ text }}</span>

        <slot name="link" />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Checkbox',

  props: {
    text: {
      type: [String, null],
      required: false,
      default: null,
    },
  },

  setup() {
    const control = ref(false);

    return {
      control,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = ".checkbox"

{$name}
  position relative

  &__wrapper
    @extend $check__wrapper

  &__input
    @extend $check__input

  &__image
    @extend $check__image

  &__border
    @extend $check__border

  &__border-inner
    @extend $check__border-inner

  &__label
    @extend $check__label

  &__text
    @extend $check__text
</style>
