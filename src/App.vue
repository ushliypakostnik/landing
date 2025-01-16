<template>
  <DS>
    <LayoutSite
      :items="[
        { link: '#', text: 'Модули' },
        { link: '#', text: 'Возможности' },
        { link: '#', text: 'Для кого' },
        { link: '#', text: 'Внедрения' },
        { link: '#', text: 'Поддержка' },
      ]"
    >
      <template #logo>
        <img
          v-if="theme === Themes.default && isScroll"
          :src="require(`@/assets/svg/logo_main.svg`)"
        />
        <img v-else :src="require(`@/assets/svg/logo_main--white.svg`)" />
      </template>

      <template #logo-gadgets>
        <img
          v-if="theme === Themes.default"
          :src="require(`@/assets/svg/logo_main.svg`)"
        />
        <img v-else :src="require(`@/assets/svg/logo_main--white.svg`)" />
      </template>

      <template #button>
        <Button
          class="layout__button"
          size="polyxo"
          @click.prevent="setModal('form')"
          >Заявка на подключение</Button
        >
      </template>

      <template #button-gadgets>
        <Button
          class="layout__gadgets-menu-button"
          size="helike"
          is-wide
          @click.prevent="setModal('form')"
          >Заявка на подключение</Button
        >
      </template>

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

                <div class="app__wrapper-flex">
                  <Button size="laripha">Заказать демонстрацию</Button>

                  <div class="app__video-button">
                    <Plank
                      title="Видео со звуком"
                      subtitle="5:28, 140 Мб"
                      @click.prevent="setModal('video')"
                    />
                  </div>
                </div>
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
          <Wrapper>
            <div class="app__slider">
              <Carousel v-bind="config" :key="slider">
                <Slide v-for="slide in 9" :key="slide">
                  <div :class="`app__slide app__slide--${slide}`" />
                </Slide>

                <template #addons>
                  <Navigation>
                    <template #prev>
                      <div class="app__arrow-left">
                        <svg
                          class="visible--block--narrow"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="32" height="32" rx="16" fill="white" />
                          <path
                            d="M18.8378 10.0416C19.1368 9.57729 19.0028 8.95846 18.5385 8.65941C18.3708 8.55135 18.1828 8.49983 17.9971 8.5C17.6688 8.5003 17.3473 8.66209 17.1563 8.95864L13.6673 14.3757C13.6656 14.3783 13.6639 14.3809 13.6623 14.3835L13.3186 14.9172C12.8938 15.5767 12.8938 16.4236 13.3186 17.0831L13.6623 17.6168C13.664 17.6194 13.6656 17.622 13.6673 17.6246L17.1563 23.0416C17.2685 23.2157 17.4256 23.3434 17.6027 23.4192C17.8524 23.5261 18.1417 23.5298 18.4007 23.4152C18.4478 23.3944 18.4939 23.3696 18.5385 23.3408C19.0029 23.0418 19.1368 22.4229 18.8378 21.9586L15.3487 16.5416C15.3478 16.5401 15.3468 16.5386 15.3458 16.5371C15.1373 16.2095 15.1373 15.7908 15.3458 15.4632L18.8378 10.0416Z"
                            fill="#80858E"
                          />
                        </svg>
                        <svg
                          class="hidden--block--narrow"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="48" height="48" rx="24" fill="white" />
                          <path
                            d="M29.8255 9.56267C30.1362 9.10607 30.018 8.48405 29.5614 8.17335C29.3892 8.05617 29.1934 8.00001 28.9997 8C28.6797 7.9998 28.3651 8.15296 28.1715 8.43753L18.7302 22.3124C18.7202 22.3271 18.7103 22.3419 18.7005 22.3568L18.348 22.875C17.886 23.5539 17.886 24.4463 18.348 25.1252L18.7006 25.6434C18.7103 25.6583 18.7202 25.6731 18.7302 25.6878L28.1715 39.5627C28.3651 39.8472 28.6797 40.0004 28.9997 40.0002C29.1934 40.0002 29.3892 39.944 29.5614 39.8268C30.018 39.5161 30.1362 38.8941 29.8255 38.4375L20.3667 24.5369C20.1583 24.2095 20.1584 23.7907 20.3668 23.4633L29.8255 9.56267Z"
                            fill="#80858E"
                          />
                        </svg>
                      </div>
                    </template>
                    <template #next>
                      <div class="app__arrow-right">
                        <svg
                          class="visible--block--narrow"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="32" height="32" rx="16" fill="white" />
                          <g clip-path="url(#clip0_926_2355)">
                            <path
                              d="M13.1623 10.0416C12.8633 9.57729 12.9973 8.95846 13.4616 8.65941C13.6293 8.55135 13.8173 8.49983 14.003 8.5C14.3313 8.5003 14.6528 8.66209 14.8438 8.95864L18.3328 14.3757C18.3345 14.3783 18.3362 14.3809 18.3378 14.3835L18.6815 14.9172C19.1063 15.5767 19.1063 16.4236 18.6815 17.0831L18.3378 17.6168C18.3361 17.6194 18.3345 17.622 18.3328 17.6246L14.8438 23.0416C14.7316 23.2157 14.5745 23.3434 14.3974 23.4192C14.1477 23.5261 13.8584 23.5298 13.5994 23.4152C13.5523 23.3944 13.5062 23.3696 13.4616 23.3408C12.9973 23.0418 12.8633 22.4229 13.1623 21.9586L16.6514 16.5416C16.6523 16.5401 16.6533 16.5386 16.6543 16.5371C16.8628 16.2095 16.8628 15.7908 16.6543 15.4632L13.1623 10.0416Z"
                              fill="#80858E"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_926_2355">
                              <rect
                                width="6"
                                height="16"
                                fill="white"
                                transform="translate(13 8)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          class="hidden--block--narrow"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="48" height="48" rx="24" fill="white" />
                          <path
                            d="M18.1748 9.56267C17.8641 9.10607 17.9824 8.48405 18.439 8.17335C18.6112 8.05617 18.8069 8.00001 19.0006 8C19.3207 7.9998 19.6352 8.15296 19.8289 8.43753L29.2702 22.3124C29.2802 22.3271 29.2901 22.3419 29.2998 22.3568L29.6524 22.875C30.1144 23.5539 30.1144 24.4463 29.6524 25.1252L29.2998 25.6434C29.2901 25.6583 29.2802 25.6731 29.2702 25.6878L19.8289 39.5627C19.6352 39.8472 19.3207 40.0004 19.0006 40.0002C18.8069 40.0002 18.6112 39.944 18.439 39.8268C17.9824 39.5161 17.8641 38.8941 18.1748 38.4375L27.6336 24.5369C27.842 24.2095 27.842 23.7907 27.6336 23.4633L18.1748 9.56267Z"
                            fill="#80858E"
                          />
                        </svg>
                      </div>
                    </template>
                  </Navigation>
                  <Pagination />
                </template>
              </Carousel>
            </div>
          </Wrapper>
        </section>

        <section class="app__section app__section--color app__section--color1">
          <Wrapper>
            <div class="app__color app__color--1">
              <div class="app__color-wrapper-outer visible--flex--widest">
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--1">
                      <div>
                        Управление ресурсами<br />на основе «больших данных»
                      </div>
                    </div>
                    <div class="app__color-block app__color-block--2">
                      <div>
                        Математическое моделирование<br />и машинное обучение
                      </div>
                    </div>
                    <div class="app__color-block app__color-block--3">
                      <div>Мобильные<br />технологии</div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--4">
                      <div>
                        Аналитика и роботизация оцифрованных<br />бизнес-процессов
                        предприятия
                      </div>
                    </div>
                    <div class="app__color-block app__color-block--5">
                      <div>
                        Цифровой контроль за выполнением<br />измеримых
                        показателей
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="app__color-wrapper-outer visible--flex--wide">
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--1">
                      <div>
                        Управление ресурсами<br />на основе «больших данных»
                      </div>
                    </div>
                    <div class="app__color-block app__color-block--2">
                      <div>
                        Математическое моделирование<br />и машинное обучение
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--3">
                      <div>Мобильные<br />технологии</div>
                    </div>
                    <div class="app__color-block app__color-block--4">
                      <div>
                        Аналитика и роботизация оцифрованных<br />бизнес-процессов
                        предприятия
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--5">
                      <div>
                        Цифровой контроль за выполнением<br />измеримых
                        показателей
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="app__color-wrapper-outer visible--flex--middle">
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--1">
                      <div>
                        Управление ресурсами<br />на основе «больших данных»
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--2">
                      <div>
                        Математическое моделирование<br />и машинное обучение
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--3">
                      <div>Мобильные<br />технологии</div>
                    </div>
                    <div class="app__color-block app__color-block--4">
                      <div>
                        Аналитика и роботизация оцифрованных<br />бизнес-процессов
                        предприятия
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--5">
                      <div>
                        Цифровой контроль за выполнением<br />измеримых
                        показателей
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="app__color-wrapper-outer visible--flex--narrow">
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--1">
                      <div>
                        Управление ресурсами<br />на основе «больших данных»
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--2">
                      <div>
                        Математическое моделирование<br />и машинное обучение
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--3">
                      <div>Мобильные<br />технологии</div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--4">
                      <div>
                        Аналитика и роботизация оцифрованных<br />бизнес-процессов
                        предприятия
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--5">
                      <div>
                        Цифровой контроль за выполнением<br />измеримых
                        показателей
                      </div>
                    </div>
                  </div>
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

        <section class="app__section app__section--color app__section--color2">
          <Wrapper>
            <div class="app__color app__color--2">
              <div class="app__color-wrapper-outer visible--flex--widest">
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--6">
                      <div>
                        Достоверные данные для стратегического<br />управления и
                        мониторинга
                      </div>
                    </div>
                    <div class="app__color-block app__color-block--7">
                      <div>
                        Повышение эффективности технологического<br />оборудования
                        и сокращение потерь поставляемого ресурса
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--8">
                      <div>
                        Увеличение положительных отзывов и снижение
                        негативных<br />настроений Населения по услугам
                        ресурсоснабжения
                      </div>
                    </div>
                    <div class="app__color-block app__color-block--9">
                      <div>Прозрачность<br />при оказании услуг</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="app__color-wrapper-outer hidden--flex--widest">
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--6">
                      <div class="hidden--flex--narrow">
                        Достоверные данные для<br />стратегического управления и
                        мониторинга
                      </div>
                      <div class="visible--flex--narrow">
                        Достоверные данные<br />для стратегического<br />управления
                        и мониторинга
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--7">
                      <div class="hidden--flex--narrow">
                        Повышение эффективности технологического<br />оборудования
                        и сокращение потерь поставляемого ресурса
                      </div>
                      <div class="visible--flex--narrow">
                        Повышение эффективности<br />технологического
                        оборудования<br />
                        и сокращение потерь<br />поставляемого ресурса
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--8">
                      <div class="hidden--flex--narrow">
                        Увеличение положительных отзывов и снижение
                        негативных<br />настроений Населения по услугам
                        ресурсоснабжения
                      </div>
                      <div class="visible--flex--narrow">
                        Увеличение положительных<br />отзывов и снижение
                        негативных<br />настроений Населения по<br />услугам
                        ресурсоснабжения
                      </div>
                    </div>
                  </div>
                </div>
                <div class="app__color-wrapper">
                  <div class="app__color-wrapper-inner">
                    <div class="app__color-block app__color-block--9">
                      <div>Прозрачность<br />при оказании услуг</div>
                    </div>
                  </div>
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

      <template #modals>
        <Modal v-show="modal === 'video'" is-viewport>
          <div class="app__modal-video">
            <video
              id="app__video"
              class="app__modal-video"
              :width="width2"
              :height="height2"
            >
              <source src="./assets/video/background.mp4" type="video/mp4" />
            </video>

            <div class="app__modal-video-wrapper">
              <ButtonSimple
                class="app__modal-video-close"
                skin="light"
                @click.prevent="closeModal()"
              >
                <Icon name="exit-fullscreen_20" />
              </ButtonSimple>

              <ButtonPlayer v-if="!isPlay" @click.prevent="play()" />
            </div>
          </div>
        </Modal>

        <Modal v-show="modal === 'form'">
          <div class="app__modal-title">
            Закажите бесплатную демонстрацию продукта
          </div>
          <div class="app__modal-subtitle">
            Наш менеджер свяжется с вами для обсуждения деталей
          </div>
          <div class="app__modal-form">
            <div class="app__form-grid">
              <div>
                <Input placeholder="Как к вам обращаться" />
              </div>
              <div>
                <Input placeholder="Номер телефона" />
              </div>
            </div>
            <div class="app__modal-check">
              <Checkbox text="Согласен на ">
                <template #link>
                  <Link text="обработку персональных данных" link="#" />
                </template>
              </Checkbox>
            </div>
            <div class="app__button">
              <Button size="helike" is-wide>Отправить</Button>
            </div>
          </div>
        </Modal>
      </template>

      <template #footer>
        <Footer />
      </template>
    </LayoutSite>
  </DS>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { defineComponent, onMounted, ref, computed, watch } from 'vue';

// Types
import { Themes } from '@/utils/constants';

// Components
import DS from '@/components/ds/DS.vue';
import Wrapper from '@/components/ds/Wrapper.vue';
import Button from '@/components/ds/Button.vue';
import Plank from '@/components/ds/Plank.vue';
import LayoutSite from '@/components/ds/LayoutSite.vue';
import Modal from '@/components/ds/Modal.vue';
import ButtonPlayer from '@/components/ds/ButtonPlayer.vue';
import ButtonSimple from '@/components/ds/ButtonSimple.vue';
import Input from '@/components/ds/Input.vue';
import Checkbox from '@/components/ds/Checkbox.vue';
import Icon from '@/components/ds/Icon.vue';
import Link from '@/components/ds/Link.vue';
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
    Plank,
    LayoutSite,
    Footer,
    Modal,
    ButtonPlayer,
    ButtonSimple,
    Icon,
    Input,
    Checkbox,
    Link,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup() {
    const store = useStore(key);

    let width = ref(0);
    let height = ref(0);
    let width2 = ref(0);
    let height2 = ref(0);
    let slider = ref(0);
    let isMounted = ref(false);
    let isPlay = ref(false);
    let onResize: () => void;
    let setSizes: () => void;
    let setSizes2: () => void;
    let setModal: (name: string) => void;
    let closeModal: () => void;
    let play: () => void;

    const modal = computed(() => store.getters['layout/modal']);
    const theme = computed(() => store.getters['persist/theme']);
    const isScroll = computed(() => store.getters['layout/isScroll']);

    onMounted(() => {
      window.addEventListener('resize', () => onResize(), false);

      setSizes();
    });

    onResize = () => {
      setSizes();
      setSizes2();
    };

    setSizes = () => {
      ++slider.value;

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

    setSizes2 = () => {
      setTimeout(() => {
        const modal = document.getElementById('app__modal');
        if (modal) {
          if (modal.offsetWidth / modal.offsetHeight <= 16 / 9) {
            height2.value = modal.offsetHeight;
            width2.value = (modal.offsetHeight * 16) / 9;
          } else {
            width2.value = modal.offsetWidth;
            height2.value = (modal.offsetWidth * 9) / 16;
          }
        }
      }, 0);
    };

    setModal = (name) => {
      store.dispatch('layout/setLayoutState', {
        field: 'modal',
        value: name,
      });
    };

    closeModal = () => {
      store.dispatch('layout/setLayoutState', {
        field: 'modal',
        value: null,
      });
    };

    play = () => {
      const video = document.getElementById('app__video');
      if (video) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        video.play().then(() => {
          isPlay.value = true;

          video.addEventListener('ended', () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            video.currentTime = 0;
            isPlay.value = false;
          });
        });
      }
    };

    watch(
      () => modal.value,
      () => {
        setSizes2();
      },
    );

    return {
      width,
      height,
      width2,
      height2,
      isMounted,
      config,
      modal,
      setModal,
      closeModal,
      play,
      isPlay,
      slider,
      isScroll,
      theme,
      Themes,
    };
  },
});
</script>

<style lang="stylus">
@import "~/src/assets/stylus/main.styl";

// Slider
:root
  --vc-pgn-active-color var(--rocky)
  --vc-pgn-background-color var(--dangal)
  --vc-pgn-height 8px
  --vc-pgn-width 8px
  --vc-pgn-border-radius 4px
  --vc-pgn-margin 2px

.carousel__viewport
  border-radius 10px

.carousel__pagination
  bottom -48px

  +$middle()
    bottom -40px

  +$narrow()
    bottom -36px

.carousel__pagination-button:hover
  color $colors.alien
  color var(--alien)

$name = '.app'

{$name}
  &__modal-video-close
    position absolute
    top 8px
    right 8px

  &__video-button
    width 240px
    background $colors.white
    background var(--white)
    $border-radius("kurza")

    +$narrow()
      width 100%
      margin-top 24px

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
      padding 10px
      width 100% //536px
      height calc((100vw - 48px) * 272 / 536) // 272px

    +$narrow()
      padding 6px
      width 100% //313px
      height calc((100vw - 48px) * 158 / 313) // 158px

  &__slide
    +$widest()
      width  1021px
      height 499px

    +$wide()
      width 753px
      height 368px

    +$middle()
      width calc((100vw - 48px))
      height calc((100vw - 48px) * 253 / 518 - 4px)

    +$narrow()
      width calc((100vw - 48px))
      height calc((100vw - 48px) * 147 / 301 - 4px)

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

    &--7
      background url('./assets/images/7.png') no-repeat
      background-size cover

    &--8
      background url('./assets/images/8.png') no-repeat
      background-size cover

    &--9
      background url('./assets/images/9.png') no-repeat
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
    width 100%
    position absolute
    left 0
    bottom 0
    padding-bottom 64px

    &-flex
      display flex
      justify-content space-between

      +$narrow()
        display block

    &-outer
      height 100vh
      position relative

  &__color-wrapper-outer
    flex-direction column

  &__color-wrapper-inner
    display inline-block
    margin 0 auto

  &__color-wrapper
    text-align center

    & + {$name}__color-wrapper
      margin-top 16px

      +$middle()
        margin-top 8px

      +$narrow()
        margin-top 8px

  &__color-block
    display inline-block
    vertical-align top
    height 96px
    $text("taleggio")

    > div
      @extend $flexCenter
      width 100%
      height 100%
      text-align center
      background $colors.amelie
      background var(--amelie)
      $border-radius("geban")

    +$middle()
      height 72px
      $text("bryndza")

    +$narrow()
      height 64px
      $text("roquefort")

    &--1
      width 343px
      margin-right 16px

      +$middle()
        width 268px
        margin-right 0

      +$narrow()
        width 239px
        margin-right 0

    &--2
      width 380px
      margin-right 16px

      +$wide()
        margin-right 0

      +$middle()
        width 299px
        margin-right 0

      +$narrow()
        width 249px
        margin-right 0

    &--3
      width 166px

      +$wide()
        margin-right 16px

      +$middle()
        width 125px
        margin-right 8px

      +$narrow()
        width 125px
        margin-right 0

    &--4
      width 464px
      margin-right 16px

      +$wide()
        margin-right 0

      +$middle()
        width 365px
        margin-right 0

      +$narrow()
        width 201px
        margin-right 0

    &--5
      width 418px

      +$middle()
        width 331px

      +$narrow()
        width 273px

    &--6
      width 477px
      margin-right 16px

      +$wide()
        margin-right 0

      +$middle()
        width 381px
        margin-right 0

      +$narrow()
        height 80px
        width 211px
        margin-right 0

    &--7
      width 653px

      +$middle()
        height 92px
        width 401px

      +$narrow()
        width 251px
        height 96px

    &--8
      width 663px
      height 92px
      margin-right 16px

      +$wide()
        margin-right 0

      +$middle()
        width 429px
        margin-right 0

      +$narrow()
        margin-right 0
        width 251px
        height 96px

    &--9
      width 244px

      +$middle()
        width 189px

      +$narrow()
        width 189px
        height 64px

  &__color
    @extend $flexCenter
    width 100%
    height 100%

    &--1
      background url('./assets/images/bg_wide.svg') no-repeat
      border-radius 64px

      +$middle()
        background url('./assets/images/bg_middle.svg') no-repeat

      +$narrow()
        background url('./assets/images/bg_narrow.svg') no-repeat

    &--2
      background url('./assets/images/bg_wide-2.svg') no-repeat
      border-radius 64px

      +$middle()
        background url('./assets/images/bg_middle-2.svg') no-repeat

      +$narrow()
        background url('./assets/images/bg_narrow-2.svg') no-repeat

  &__arrow-left
    transform translateX(-42px)

    +$wide()
      transform translateX(-38px)

    +$middle()
      transform translateX(-32px)

    +$narrow()
      transform translateX(-30px)

  &__arrow-right
    transform translateX(42px)

    +$wide()
      transform translateX(38px)

    +$middle()
      transform translateX(32px)

    +$narrow()
      transform translateX(30px)

  &__arrow-left,
  &__arrow-right
    @extend $mediumShadow
    border-radius 50%

  &__section
    background $colors.amelie
    background var(--amelie)

    &--color
      height 336px
      background-size cover

      > div
        height 100%
        color $colors.harakiri
        color var(--harakiri)

    &--color1
      padding-top 80px

      +$wide()
        height 448px

      +$middle()
        height 472px

      +$narrow()
        height 528px

    &--color2
      padding-top 0

      +$wide()
        height 560px

      +$middle()
        height 432px

      +$narrow()
        height 440px

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

  &__modal-video-wrapper
    @extend $flexCenter
    position absolute
    width 100%
    height 100%
    left 0
    right 0
    top 0
    bottom 0

  &__modal-title
    color $colors.harakiri
    color var(--harakiri)
    margin-bottom 16px
    $text("camembert")

    +$narrow()
      $text("burrata")

  &__modal-subtitle
    color $colors.troy
    color var(--troy)
    margin-bottom 24px
    $text("parmigiano")

  &__modal-form
    // margin-bottom 24px

  &__modal-check
    margin-bottom 32px

  &__form-grid
    margin-bottom 24px
    > div
      display inline-block
      vertical-align top

      &:first-child
        width 512px
        margin-right 32px

        +$wide()
          width 372px

        +$gadgets()
          width 100%
          margin-bottom 24px

      &:last-child
        width 296px

        +$wide()
          width 212px

        +$gadgets()
          width 100%
</style>
