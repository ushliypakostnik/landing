<template>
  <div
    class="control__wrapper"
    :class="[
      `control--${skin}`,
      (modelValue.length > 0 || isFocus) && 'control__wrapper--focus',
    ]"
  >
    <input
      v-model="model"
      class="control__control"
      @focus="onFocus"
      @blur="onBlur"
    />

    <div class="control__placeholder">{{ placeholder }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Input',

  props: {
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
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

  emits: ['update:modelValue'],

  setup(props, context) {
    const isFocus = ref(false);
    let onBlur: () => void;
    let onFocus: () => void;

    const model = computed({
      get() {
        return props.modelValue;
      },

      set(value) {
        return context.emit('update:modelValue', value);
      },
    });

    onBlur = () => {
      isFocus.value = false;
    };

    onFocus = () => {
      isFocus.value = true;
    };

    return {
      model,
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
