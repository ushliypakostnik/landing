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
              autoplay
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

        <section class="app__section app__section--slider">
          <div class="app__slider">
            <Carousel v-bind="config">
              <Slide v-for="slide in 6" :key="slide">
                <div :class="`app__slide app__slide--${slide}`" />
              </Slide>

              <template #addons>
                <Navigation>
                  <template #prev>
                    <div class="app__arrow-left">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_622_738)">
                          <rect
                            x="16"
                            y="12"
                            width="48"
                            height="48"
                            rx="24"
                            fill="white"
                          />
                          <path
                            d="M45.8255 21.5627C46.1362 21.1061 46.018 20.484 45.5614 20.1733C45.3892 20.0562 45.1934 20 44.9997 20C44.6797 19.9998 44.3651 20.153 44.1715 20.4375L34.7302 34.3124C34.7202 34.3271 34.7103 34.3419 34.7005 34.3568L34.348 34.875C33.886 35.5539 33.886 36.4463 34.348 37.1252L34.7006 37.6434C34.7103 37.6583 34.7202 37.6731 34.7302 37.6878L44.1715 51.5627C44.3651 51.8472 44.6797 52.0004 44.9997 52.0002C45.1934 52.0002 45.3892 51.944 45.5614 51.8268C46.018 51.5161 46.1362 50.8941 45.8255 50.4375L36.3667 36.5369C36.1583 36.2095 36.1584 35.7907 36.3668 35.4633L45.8255 21.5627Z"
                            fill="#80858E"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_622_738"
                            x="0"
                            y="0"
                            width="80"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="8" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0470588 0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0.12 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_622_738"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_622_738"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </template>
                  <template #next>
                    <div class="app__arrow-left">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_622_750)">
                          <rect
                            x="16"
                            y="12"
                            width="48"
                            height="48"
                            rx="24"
                            fill="white"
                          />
                          <path
                            d="M34.1748 21.5627C33.8641 21.1061 33.9824 20.484 34.439 20.1733C34.6112 20.0562 34.8069 20 35.0006 20C35.3207 19.9998 35.6352 20.153 35.8289 20.4375L45.2702 34.3124C45.2802 34.3271 45.2901 34.3419 45.2998 34.3568L45.6524 34.875C46.1144 35.5539 46.1144 36.4463 45.6524 37.1252L45.2998 37.6434C45.2901 37.6583 45.2802 37.6731 45.2702 37.6878L35.8289 51.5627C35.6352 51.8472 35.3207 52.0004 35.0006 52.0002C34.8069 52.0002 34.6112 51.944 34.439 51.8268C33.9824 51.5161 33.8641 50.8941 34.1748 50.4375L43.6336 36.5369C43.842 36.2095 43.842 35.7907 43.6336 35.4633L34.1748 21.5627Z"
                            fill="#80858E"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_622_750"
                            x="0"
                            y="0"
                            width="80"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="8" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.0470588 0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0.12 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_622_750"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_622_750"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </template>
                </Navigation>
                <Pagination />
              </template>
            </Carousel>
          </div>
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
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { defineComponent, onMounted, ref } from 'vue';

// Components
import DS from '@/components/ds/DS.vue';
import Wrapper from '@/components/ds/Wrapper.vue';
import Button from '@/components/ds/Button.vue';
import LayoutSite from '@/components/ds/LayoutSite.vue';
import Footer from '@/components/Footer.vue';

const config = {
  wrapAround: true,
};

export default defineComponent({
  name: 'App',

  components: {
    DS,
    Wrapper,
    Button,
    LayoutSite,
    Footer,
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
      config,
    };
  },
});
</script>

<style lang="stylus">
@import "~/src/assets/stylus/main.styl";

// Slider
:root
  --vc-pgn-active-color var(--alien)
  --vc-pgn-background-color var(--apocalypse)
  --vc-pgn-height 8px
  --vc-pgn-width 8px
  --vc-pgn-border-radius 4px
  --vc-pgn-margin 2px

.carousel__pagination
  bottom -48px

$name = '.app'

{$name}
  &__slider
    margin 0 auto
    background $colors.inception
    background var(--inception)
    $border-radius("kurza")

    +$widest()
      padding 20px
      width 1061px
      height 539px

    +$wide()
      padding 15px
      width 782px
      height 398px

    +$middle()
      padding 6px
      width 536px
      height 272px

    +$narrow()
      padding 6px
      width 313px
      height 158px

  &__slide
    +$widest()
      width  1021px
      height 499px

    +$wide()
      width 753px
      height 368px

    +$middle()
      width 518px
      height 253px

    +$narrow()
      width 301px
      height 147px

    &--1
      background url('./assets/images/1.png') no-repeat
      background-size cover

    &--2
      background url('./assets/images/2.png') no-repeat
      background-size cover

    &--3
      background url('./assets/images/3.png') no-repeat
      background-size cover

    &--4
      background url('./assets/images/4.png') no-repeat
      background-size cover

    &--5
      background url('./assets/images/5.png') no-repeat
      background-size cover

    &--6
      background url('./assets/images/6.png') no-repeat
      background-size cover

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
