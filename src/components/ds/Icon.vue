<template>
  <img
    :src="require(`@/assets/svg/icons/${name}.svg`)"
    :style="`
      width: ${size}px;
      min-width: ${size}px;
      height: ${size}px;
    `"
  />
</template>

<script lang="ts">
export default {
  name: 'Icon',

  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 16,
    },
  },
};
</script>
