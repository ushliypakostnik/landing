<template>
  <div
    class="control__wrapper"
    :class="[
      `control--${skin}`,
      (control.length > 0 || isFocus) && 'control__wrapper--focus',
    ]"
  >
    <input
      v-model="control"
      class="control__control"
      @focus="onFocus"
      @blur="onBlur"
    />

    <div class="control__placeholder">{{ placeholder }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Input',

  props: {
    skin: {
      type: String,
      required: false,
      default: 'default',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },

  setup() {
    const control = ref('');
    const isFocus = ref(false);
    let onBlur: () => void;
    let onFocus: () => void;

    onBlur = () => {
      isFocus.value = false;
    };

    onFocus = () => {
      isFocus.value = true;
    };

    return {
      control,
      isFocus,
      onBlur,
      onFocus,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = '.control'

{$name}
  &__wrapper
    @extend $control__wrapper

  &__placeholder
    @extend $control__placeholder

  &__control
    @extend $control__control

  &--default
    {$name}__control
      @extend $control__control--default

  &--map
    {$name}__control
      @extend $control__control--map

    {$name}__wrapper
      @extend $control__wrapper--map
</style>
