<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

// Constants
import { DESIGN, DSEvents, Themes } from '@/utils/constants';

// Utils
import emmiter from '@/utils/emitter';

export default defineComponent({
  name: 'DS',

  setup() {
    const store = useStore(key);

    const theme = computed(() => store.getters['persist/theme']);

    const setTheme = (thm: Themes): void => {
      store.dispatch('persist/setPersistState', {
        field: 'theme',
        value: thm,
      });

      for (const color in DESIGN.THEMES[thm]) {
        document.documentElement.style.setProperty(
          `--${color}`,
          DESIGN.THEMES[thm][color],
        );
      }

      localStorage.setItem('theme', thm);
    };

    onBeforeMount(() => {
      setTheme(theme.value as Themes);

      // Событие смены темы
      emmiter.on(DSEvents.toggleTheme, () => {
        if (theme.value === Themes.default) setTheme(Themes.dark);
        else setTheme(Themes.default);
      });
    });

    return {};
  },
});
</script>

<style lang="stylus" scoped>
// @import "~/src/assets/stylus/main.styl";

// Import fonts

@font-face
  font-family "Golos Text"
  src url("../../assets/fonts/Golos/GolosText-Medium.eot")
  src local("Golos Text Medium"), local("GolosText-Medium"),
    url("../../assets/fonts/Golos/GolosText-Medium.eot?#iefix") format("embedded-opentype"),
    url("../../assets/fonts/Golos/GolosText-Medium.woff2") format("woff2"),
    url("../../assets/fonts/Golos/GolosText-Medium.woff") format("woff"),
    url("../../assets/fonts/Golos/GolosText-Medium.ttf") format("truetype")
  font-weight 500
  font-style normal

@font-face
  font-family "Golos Text";
  src url("../../assets/fonts/Golos/GolosText-Black.eot")
  src local("Golos Text Black"), local("GolosText-Black"),
    url("../../assets/fonts/Golos/GolosText-Black.eot?#iefix") format("embedded-opentype"),
    url("../../assets/fonts/Golos/GolosText-Black.woff2") format("woff2"),
    url("../../assets/fonts/Golos/GolosText-Black.woff") format("woff"),
    url("../../assets/fonts/Golos/GolosText-Black.ttf") format("truetype")
  font-weight 900
  font-style normal

@font-face
  font-family "Golos Text"
  src url("../../assets/fonts/Golos/GolosText-DemiBold.eot")
  src local("Golos Text DemiBold"), local("GolosText-DemiBold"),
    url("../../assets/fonts/Golos/GolosText-DemiBold.eot?#iefix") format("embedded-opentype"),
    url("../../assets/fonts/Golos/GolosText-DemiBold.woff2") format("woff2"),
    url("../../assets/fonts/Golos/GolosText-DemiBold.woff") format("woff"),
    url("../../assets/fonts/Golos/GolosText-DemiBold.ttf") format("truetype")
  font-weight 600
  font-style normal

@font-face
  font-family "Golos Text"
  src url("../../assets/fonts/Golos/GolosText-Bold.eot")
  src local("Golos Text Bold"), local("GolosText-Bold"),
    url("../../assets/fonts/Golos/GolosText-Bold.eot?#iefix") format("embedded-opentype"),
    url("../../assets/fonts/Golos/GolosText-Bold.woff2") format("woff2"),
    url("../../assets/fonts/Golos/GolosText-Bold.woff") format("woff"),
    url("../../assets/fonts/Golos/GolosText-Bold.ttf") format("truetype")
  font-weight bold
  font-style normal

@font-face
  font-family "Golos Text"
  src url("../../assets/fonts/Golos/GolosText-Regular.eot")
  src local("Golos Text Regular"), local("GolosText-Regular"),
    url("../../assets/fonts/Golos/GolosText-Regular.eot?#iefix") format("embedded-opentype"),
    url("../../assets/fonts/Golos/GolosText-Regular.woff2") format("woff2"),
    url("../../assets/fonts/Golos/GolosText-Regular.woff") format("woff"),
    url("../../assets/fonts/Golos/GolosText-Regular.ttf") format("truetype")
  font-weight normal
  font-style normal
</style>
