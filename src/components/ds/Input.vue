<template>
  <div
    class="control__wrapper"
    :class="{
      'control__wrapper--focus': control.length > 0 || isFocus,
    }"
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
    placeholder: {
      type: [String, null],
      required: false,
      default: 'helike',
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
</style>
