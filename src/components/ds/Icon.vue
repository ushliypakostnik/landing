<template>
  <img :src="require(`@/assets/svg/${name}.svg`)" />
</template>

<script lang="ts">
export default {
  name: 'Icon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
