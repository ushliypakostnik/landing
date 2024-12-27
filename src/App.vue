<template>
  <DS>
    <LayoutSite>
      <template #landing>
        <section class="app__top" id="app__top">
          <div class="app__top-wrapper">
            <video
              v-if="isMounted"
              class="app__video"
              :width="width"
              :height="height"
              loop="true"
              autoplay="autoplay"
              muted
            >
              <source src="./assets/video/background.mp4" type="video/mp4" />
            </video>
          </div>

          <Wrapper>
            <div class="app__wrapper-outer">
              <div class="app__wrapper">
                <div class="app__title">Цифровое ресурсоснабжение</div>
                <div class="app__text">
                  платформа для автоматизации основных бизнес-процессов<br
                    class="hidden--inline--gadgets"
                  /><span class="hidden--inline--desktops">&nbsp;</span
                  >ресурсоснабжающих предприятий и создания единого<br
                    class="hidden--inline--gadgets"
                  /><span class="hidden--inline--desktops">&nbsp;</span
                  >информационного пространства
                </div>
                <Button size="laripha">Заказать демонстрацию</Button>
              </div>
            </div>
          </Wrapper>
        </section>
      </template>

      <main role="main">
        <section class="app__section">
          <div>
            <div class="app__cat" />
            <div>Сайт в разработке.</div>
          </div>
        </section>
      </main>

      <template #footer>
        <Footer />
      </template>
    </LayoutSite>
  </DS>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

// Components
import DS from '@/components/ds/DS.vue';
import Wrapper from '@/components/ds/Wrapper.vue';
import Button from '@/components/ds/Button.vue';
import LayoutSite from '@/components/ds/LayoutSite.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',

  components: {
    DS,
    Wrapper,
    Button,
    LayoutSite,
    Footer,
  },

  setup() {
    let width = ref(0);
    let height = ref(0);
    let isMounted = ref(false);
    let onResize: () => void;
    let setSizes: () => void;

    onMounted(() => {
      window.addEventListener('resize', () => onResize(), false);

      setSizes();
    });

    onResize = () => {
      setSizes();
    };

    setSizes = () => {
      const top = document.getElementById('app__top');
      if (top) {
        if (top.offsetWidth / top.offsetHeight <= 16 / 9) {
          height.value = top.offsetHeight;
          width.value = (top.offsetHeight * 16) / 9;
        } else {
          width.value = top.offsetWidth;
          height.value = (top.offsetWidth * 9) / 16;
        }

        isMounted.value = true;
      }
    };

    return {
      width,
      height,
      isMounted,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = '.app'

{$name}
  &__top
    position relative
    background #000000
    color $colors.white
    color var(--white)
    width 100%
    height 100vh
    overflow hidden

    &-wrapper
      @extend $flexCenter
      position absolute
      width 100%
      height 100%
      left 0
      right 0
      top 0
      bottom 0

  &__title
    margin-bottom 8px
    $text("cheddar")

    +$narrow()
      $text("ricotta")

  &__text
    margin-bottom 32px
    $text("mascarpone")

  &__wrapper
    position absolute
    left 0
    bottom 0
    padding-bottom 64px

    &-outer
      height 100vh
      position relative

  &__section
    @extend $flexCenter
    height 700px
    background $colors.amelie
    background var(--amelie)
    color $colors.troy
    color var(--troy)
    text-align center
    $text("cheddar")

    +$narrow()
      height 400px
      $text("ricotta")

  &__cat
    margin 0 auto
    width 167px
    height 152px
    background url('./assets/images/cat.png') no-repeat
    background-size cover
</style>
