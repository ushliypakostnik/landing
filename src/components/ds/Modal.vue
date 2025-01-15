<template>
  <div class="modal" id="app__modal">
    <slot />
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import { defineComponent, watch, computed } from 'vue';

export default defineComponent({
  name: 'Modal',

  setup() {
    const store = useStore(key);

    const modal = computed(() => store.getters['layout/modal']);

    watch(
      () => modal.value,
      (value) => {
        const body = document.getElementsByTagName('body');
        if (body.length) {
          if (value) {
            body[0].style.position = 'absolute';
            body[0].style.overflow = 'hidden';
          } else {
            body[0].style.position = 'static';
            body[0].style.overflow = 'auto';
          }
        }
      },
      { immediate: true },
    );

    return {};
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = '.modal'

{$name}
  position fixed
  z-index 5000
  left 0
  right 0
  top 0
  bottom 0
  width 100vw
  height 100vh
</style>
