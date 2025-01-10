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

          <div class="app__top-overlay" />

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
        <section class="app__section app__section--product">
          <Wrapper>
            <div class="app__title">О продукте</div>
            <div class="app__subtitle">
              6 модулей для производства, эксплуатации, сбыта и управления
              ресурсоснабжением
            </div>
            <div class="app__grid">
              <div class="app__card">
                <div class="app__card-tag">Производство</div>
                <div class="app__card-header">Анализ режимов</div>
                <div class="app__card-text">
                  Модуль для мониторинга и анализа режимов работы оборудования,
                  отдельных сегментов сети, повышение качества и надёжности
                </div>
              </div>
              <div class="app__card">
                <div class="app__card-tag">Производство</div>
                <div class="app__card-header">Анализ балансов</div>
                <div class="app__card-text">
                  Модуль для выявление зон наибольших потерь и локализации
                  дисбаланса системы, сокращение коммерческих и технологических
                  потерь
                </div>
              </div>
              <div class="app__card">
                <div class="app__card-tag">Эксплуатация</div>
                <div class="app__card-header">Поддержка эксплуатации</div>
                <div class="app__card-text">
                  Модуль для повышение эффективности работы эксплуатационного
                  персонала на объектах предприятия
                </div>
              </div>
              <div class="app__card">
                <div class="app__card-tag">Эксплуатация</div>
                <div class="app__card-header">Заявки</div>
                <div class="app__card-text">
                  Модуль для повышения эффективности выполнения плановых и
                  аварийных ремонтных работ, использования транспортных средств
                  и спецтехники
                </div>
              </div>
              <div class="app__card">
                <div class="app__card-tag">Сбыт</div>
                <div class="app__card-header">Обходчик контролёр</div>
                <div class="app__card-text">
                  Модуль для автоматизации обследования абонентов, контроль
                  потребления ресурсов
                </div>
              </div>
              <div class="app__card">
                <div class="app__card-tag">Управление</div>
                <div class="app__card-header">Центральная панель</div>
                <div class="app__card-text">
                  Модуль для умного визуального представления ключевых
                  показателей через систему гибко настраиваемых панелей
                  индикаторов
                </div>
              </div>
            </div>
          </Wrapper>
        </section>

        <section class="app__section app__section--dev">
          <div>
            <div class="app__cat" />
            <div class="app__cat-text">Сайт в разработке.</div>
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
    color $colors.white
    color var(--white)
    width 100%
    height 100vh
    overflow hidden
    background url('./assets/images/image.png') no-repeat
    background-size cover

    &-wrapper
      @extend $flexCenter
      position absolute
      width 100%
      height 100%
      left 0
      right 0
      top 0
      bottom 0

    &-overlay
      background #0000007A
      position absolute
      width 100%
      height 100%
      left 0
      right 0
      top 0
      bottom 0

    {$name}__title
      color $colors.white
      color var(--white)

  &__title
    margin-bottom 8px
    color $colors.harakiri
    color var(--harakiri)
    $text("cheddar")

    +$narrow()
      $text("ricotta")

  &__subtitle
    color $colors.troy
    color var(--troy)
    margin-bottom 40px
    $text("mascarpone")

    +$narrow()
      $text("parmigiano")

  &__grid
    display grid

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
    background $colors.amelie
    background var(--amelie)

    &--dev
      @extend $flexCenter
      height 700px
      text-align center

      +$narrow()
        height 400px

    &--product
      padding-top 80px
      padding-bottom 80px

      {$name}__grid
        grid-gap 12px
        grid-auto-flow column
        grid-template-columns repeat(3, 1fr)
        grid-template-rows repeat(2, 1fr)

        +$middle()
          grid-template-columns repeat(2, 1fr)
          grid-template-rows repeat(3, 1fr)

        +$narrow()
          grid-template-columns repeat(1, 1fr)
          grid-template-rows repeat(6, 1fr)

  &__card
    background $colors.trainspotting
    background var(--trainspotting)
    padding 20px
    $border-radius("bana")

    &-tag
      margin-bottom 4px
      color $colors.rocky
      color var(--rocky)
      $text("mozzarella")

    &-header
      margin-bottom 8px
      color $colors.harakiri
      color var(--harakiri)
      $text("taleggio")

    &-text
      color $colors.troy
      color var(--troy)
      $text("parmigiano")

  &__cat
    margin 0 auto
    width 167px
    height 152px
    background url('./assets/images/cat.png') no-repeat
    background-size cover

    &-text
      color $colors.troy
      color var(--troy)
      $text("cheddar")

      +$narrow()
        $text("ricotta")
</style>
