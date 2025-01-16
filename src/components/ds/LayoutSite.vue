<template>
  <div class="layout">
    <header
      role="header"
      class="layout__header"
      :class="[isScroll && 'layout__header--scroll']"
    >
      <Wrapper>
        <div class="layout__menu">
          <div class="layout__menu-left">
            <div
              class="layout__menu-control hidden--block--desktops"
              @click.prevent="toggleMenu(true)"
            >
              <img
                v-if="theme === Themes.default && isScroll"
                :src="require(`@/assets/svg/menu--dark.svg`)"
              />
              <img v-else :src="require(`@/assets/svg/menu.svg`)" />
            </div>

            <slot name="logo" />
          </div>

          <ul
            class="layout__links hidden--flex--gadgets"
            :class="[isScroll && 'layout__links--scroll']"
          >
            <li v-for="(item, index) in items" :key="`item--${index}`">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>

          <slot name="button" />
        </div>
      </Wrapper>
    </header>

    <div id="layout__landing">
      <slot name="landing" />
    </div>

    <slot />

    <slot name="footer" />

    <transition name="fade">
      <div class="hidden--block--desktops">
        <div v-if="isMenu" class="layout__overlay" />
        <div
          class="layout__gadgets"
          :class="[isMenu && 'layout__gadgets--on']"
          v-click-outside="onClickOutside"
        >
          <div class="layout__gadgets-top">
            <div
              class="layout__menu-control hidden--desktops"
              @click.prevent="toggleMenu(false)"
            >
              <img
                v-if="theme === Themes.default"
                :src="require(`@/assets/svg/close.svg`)"
              />
              <img v-else :src="require(`@/assets/svg/close--light.svg`)" />
            </div>

            <slot name="logo-gadgets" />
          </div>
          <ul class="layout__gadgets-menu">
            <li v-for="(item, index) in items" :key="`item--${index}`">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>

          <slot name="button-gadgets" />

          <img
            class="layout__gadgets-logo"
            :src="require(`@/assets/svg/logo_RIR--gray.svg`)"
          />
        </div>
      </div>
    </transition>
  </div>

  <Teleport to="body">
    <slot name="modals" />
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import vClickOutside from 'click-outside-vue3';

// Types
import { Themes } from '@/utils/constants';

// Components
import Wrapper from '@/components/ds/Wrapper.vue';

export default defineComponent({
  name: 'LayoutSite',

  directives: {
    clickOutside: vClickOutside.directive,
  },

  components: {
    Wrapper,
  },

  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  setup() {
    const store = useStore(key);

    const theme = computed(() => store.getters['persist/theme']);
    const isScroll = computed(() => store.getters['layout/isScroll']);

    let onScroll: () => void;
    let onResize: () => void;
    let toggleMenu: (is: boolean) => void;
    let onClickOutside: () => void;
    let isMenu = ref(false);
    let isClick = ref(false);
    let height = ref(909);

    onMounted(() => {
      window.addEventListener('scroll', () => onScroll(), false);
      window.addEventListener('resize', () => onResize(), false);

      onResize();
    });

    onScroll = () => {
      if (Math.round(window.scrollY) > height.value) {
        store.dispatch('layout/setLayoutState', {
          field: 'isScroll',
          value: true,
        });
      } else {
        store.dispatch('layout/setLayoutState', {
          field: 'isScroll',
          value: false,
        });
      }
    };

    onResize = () => {
      const landing = document.getElementById('layout__landing');
      if (landing) height.value = landing.offsetHeight - 128;
    };

    toggleMenu = (is) => {
      // console.log('LayoutSite.vue toggleMenu', is);
      if (!isClick.value) {
        isClick.value = true;
        isMenu.value = is;

        setTimeout(() => {
          isClick.value = false;
        }, 100);
      }
    };

    onClickOutside = () => {
      toggleMenu(false);
    };

    return {
      Themes,
      theme,
      isScroll,
      isMenu,
      toggleMenu,
      onClickOutside,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

.layout
  &__header
    transition background $effects.duration
    position fixed
    z-index 1000
    width 100%
    height 64px
    padding 16px 0
    background transparent

    &--scroll
      background $colors.trainspotting
      background var(--trainspotting)

  &__overlay
    position fixed
    z-index 2000
    left 0
    right 0
    top 0
    bottom 0
    width 100vw
    height 100vh
    background rgba(#000000, 72%);

  &__gadgets
    position fixed
    z-index 2500
    width 289px
    left -289px
    top 0
    bottom 0
    height 100vh
    background $colors.amelie
    background var(--amelie)
    transition left $effects.duration
    border-radius 0 $border-radiuses.geban 0 0
    padding 16px 32px

    +$narrow()
      width 278px
      left -278px

    &--on
      left 0

    &-top
      display flex

    &-menu
      list-style none
      margin 56px 0

      > li:not(:last-child)
        margin-bottom 24px

      > li > a
        color $colors.harakiri
        color var(--harakiri)
        $text("sulguni")

    &-logo
      position absolute
      bottom 16px
      left 32px

  &__menu
    display flex
    justify-content space-between

    &-control
      margin-right 24px

    &-left
      display flex

  &__links
    list-style none
    padding 0
    justify-content space-between
    padding 6px 0
    transition color $effects.duration
    color $colors.white
    color var(--white)

    &--scroll
      color $colors.troy
      color var(--troy)

    > li
      &:not(:last-child)
        margin-right 24px

      > a
        $text("suluguni")

  &__button
    +$narrow()
      display none
</style>
