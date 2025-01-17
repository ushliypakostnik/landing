<template>
  <footer role="footer" class="footer">
    <section class="footer__top">
      <Wrapper>
        <div class="footer__wrapper">
          <div>
            <div class="footer__image" />
          </div>

          <div v-if="!(isSuccess || isError)">
            <div class="footer__title">
              Закажите бесплатную демонстрацию продукта
            </div>
            <div class="footer__subtitle">
              Наш менеджер свяжется с вами для обсуждения деталей
            </div>
            <div class="footer__check">
              <Checkbox text="Согласен на ">
                <template #link>
                  <Link text="обработку персональных данных" link="#" />
                </template>
              </Checkbox>
            </div>
            <div class="footer__form">
              <div class="footer__form-grid">
                <div>
                  <Input
                    v-model="nickname"
                    skin="map"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <Input
                    v-model="phone"
                    skin="map"
                    placeholder="Номер телефона"
                  />
                </div>
              </div>
              <div class="footer__button">
                <Button
                  class="hidden--inline-block--narrow"
                  size="helike"
                  @click.prevent="postForm()"
                  >Отправить</Button
                >
                <Button
                  class="hidden--inline-block--not-narrow"
                  size="helike"
                  is-wide
                  @click.prevent="postForm()"
                  >Отправить</Button
                >
              </div>
            </div>
          </div>

          <div v-else-if="isError">
            <Icon class="footer__form-icon" name="error" />
            <div class="footer__form-title">Ошибка отправки</div>
            <div class="footer__form-subtitle">
              Что-то пошло не так. Пожалуйста, повторите попытку позже
            </div>
            <ButtonAction
              color="rocky"
              class="footer__form-action"
              @click.prevent="nullForm()"
              >Отправить</ButtonAction
            >
          </div>

          <div v-else-if="isSuccess">
            <Icon class="footer__form-icon" name="success" />
            <div class="footer__form-title">Заявка отправлена</div>
            <div class="footer__form-subtitle">
              Наш менеджер свяжется с вами, чтобы обсудить детали и договориться
              об удобном времени
            </div>
            <ButtonAction
              color="rocky"
              class="footer__form-action"
              @click.prevent="nullForm()"
              >Хорошо</ButtonAction
            >
          </div>
        </div>
      </Wrapper>
    </section>

    <section class="footer__bottom">
      <Wrapper>
        <div class="footer__block footer__block--wrapper">
          <div class="footer__block">
            <img
              v-if="theme === Themes.default"
              class="hidden--block--gadgets"
              :src="require(`@/assets/svg/logo_main.svg`)"
            />
            <img
              v-else
              class="hidden--block--gadgets"
              :src="require(`@/assets/svg/logo_main--white.svg`)"
            />

            <img
              v-if="theme === Themes.default"
              class="hidden--block--gadgets"
              :src="require(`@/assets/svg/logo_RIR.svg`)"
            />
            <img
              v-else
              class="hidden--block--gadgets"
              :src="require(`@/assets/svg/logo_RIR--white.svg`)"
            />

            <div class="footer__block-gadgets visible--flex--middle">
              <img
                v-if="theme === Themes.default"
                :src="require(`@/assets/svg/logo_main.svg`)"
              />
              <img v-else :src="require(`@/assets/svg/logo_main--white.svg`)" />

              <img
                v-if="theme === Themes.default"
                :src="require(`@/assets/svg/logo_RIR.svg`)"
              />
              <img v-else :src="require(`@/assets/svg/logo_RIR--white.svg`)" />
            </div>

            <div class="footer__block-gadgets visible--grid--narrow">
              <div>
                <img
                  v-if="theme === Themes.default"
                  :src="require(`@/assets/svg/logo_main.svg`)"
                />
                <img
                  v-else
                  :src="require(`@/assets/svg/logo_main--white.svg`)"
                />
              </div>
              <div>
                <img
                  v-if="theme === Themes.default"
                  :src="require(`@/assets/svg/logo_RIR.svg`)"
                />
                <img
                  v-else
                  :src="require(`@/assets/svg/logo_RIR--white.svg`)"
                />
              </div>
            </div>

            <div class="hidden--block--gadgets">
              <span style="white-space: nowrap"
                >АО «Росатом инфраструктурные решения»</span
              >
              <br />
              <span style="white-space: nowrap">2025 • Все права защищены</span>
            </div>

            <div class="footer__part visible--flex--middle">
              <div>Тема</div>
              <ButtonSimple skin="secondary" @click="toggleTheme" is-rounded>
                <Icon name="ecology" />
              </ButtonSimple>
            </div>
          </div>

          <div class="footer__block footer__block--second">
            <div class="footer__part hidden--flex--middle">
              <div>Тема</div>
              <ButtonSimple skin="secondary" @click="toggleTheme" is-rounded>
                <Icon name="ecology" />
              </ButtonSimple>
            </div>

            <div class="hidden--block--gadgets visible--inline-block--middle">
              <span style="white-space: nowrap"
                >АО «Росатом инфраструктурные решения»</span
              >
              <br />
              <span style="white-space: nowrap">2025 • Все права защищены</span>
            </div>

            <div class="footer__part hidden--flex--narrow">
              <div>Поделиться</div>
              <ButtonSimple
                skin="secondary"
                color="amelie"
                background="vkontakte"
                is-rounded
              >
                <Icon name="vkontakte_16" />
              </ButtonSimple>
              <ButtonSimple
                skin="secondary"
                color="amelie"
                background="odnoklassniki"
                is-rounded
              >
                <Icon name="odnoklassniki_16" />
              </ButtonSimple>
              <ButtonSimple
                skin="secondary"
                color="amelie"
                background="telegram"
                is-rounded
              >
                <Icon name="telegram_16" />
              </ButtonSimple>
            </div>
          </div>

          <div class="footer__block footer__block--mobile">
            <div class="footer__part footer__part--social">
              <div>Поделиться</div>
              <ButtonSimple
                skin="secondary"
                color="amelie"
                background="vkontakte"
                is-rounded
              >
                <Icon name="vkontakte_16" />
              </ButtonSimple>
              <ButtonSimple
                skin="secondary"
                color="amelie"
                background="odnoklassniki"
                is-rounded
              >
                <Icon name="odnoklassniki_16" />
              </ButtonSimple>
              <ButtonSimple
                skin="secondary"
                color="amelie"
                background="telegram"
                is-rounded
              >
                <Icon name="telegram_16" />
              </ButtonSimple>
            </div>

            <div class="visible--block--narrow">
              <span>АО «Росатом инфраструктурные решения»</span>
              <br />
              <span>2025 • Все права защищены</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

// Types
import { DSEvents, Themes } from '@/utils/constants';

// Components
import Wrapper from '@/components/ds/Wrapper.vue';
import Button from '@/components/ds/Button.vue';
import ButtonSimple from '@/components/ds/ButtonSimple.vue';
import ButtonAction from '@/components/ds/ButtonAction.vue';
import Icon from '@/components/ds/Icon.vue';
import Input from '@/components/ds/Input.vue';
import Checkbox from '@/components/ds/Checkbox.vue';
import Link from '@/components/ds/Link.vue';

// Utils
import emmiter from '@/utils/emitter';

export default defineComponent({
  name: 'Footer',

  components: {
    Wrapper,
    Button,
    ButtonSimple,
    Icon,
    Input,
    Checkbox,
    Link,
    ButtonAction,
  },

  setup() {
    const store = useStore(key);

    const nickname = ref('');
    const phone = ref('');
    const theme = computed(() => store.getters['persist/theme']);
    const isSuccess = computed(() => store.getters['api/isSuccess']);
    const isError = computed(() => store.getters['api/isError']);

    const nullForm = () => {
      store.dispatch('api/nullForm');
    };

    const toggleTheme = () => {
      emmiter.emit(DSEvents.toggleTheme);
    };

    const postForm = () => {
      store.dispatch('api/postForm', {
        nickname: nickname.value,
        phone: phone.value,
      });
    };

    return {
      Themes,
      theme,
      nickname,
      phone,
      isSuccess,
      isError,
      toggleTheme,
      postForm,
      nullForm,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/assets/stylus/main.styl";

$name = '.footer'

{$name}
  color $colors.metropolis
  color var(--metropolis)
  $text("mozzarella")

  &__title
    margin-bottom 8px
    color $colors.harakiri
    color var(--harakiri)
    $text("ricotta")

    +$narrow()
      $text("taleggio")

  &__subtitle
    margin-bottom 24px
    color $colors.troy
    color var(--troy)
    $text("parmigiano")

  &__image
    position absolute
    right -14px
    top -136px
    width 567px
    height 320px
    background url('../assets/svg/footer.svg') no-repeat
    background-size cover

    +$middle()
      left -32px
      top -140px
      width 536px
      height 312px

    +$narrow()
      left -32px
      top -150px
      width 312px
      height 176px

  &__wrapper
    position relative
    display grid
    grid-gap 0 32px
    grid-template-columns 5fr 7fr
    padding-top 48px

    > div:first-child
      position relative

    +$gadgets()
      display block

      > div
        position absolute
        left 0
        bottom 0

    +$middle()
      height 400px

    +$narrow()
      padding-top 48px
      height 460px

      > div
        bottom -48px

  &__top
    height 268px
    background $colors.trainspotting
    background var(--trainspotting)

    +$middle()
      height 480px

    +$narrow()
      height 580px

  &__bottom
    padding 32px 0
    background $colors.apocalypse
    background var(--apocalypse)

    +$narrow()
      height 248px

  &__block
    display flex
    justify-content space-between

    +$desktops()
      {$name}__block > *:not(:last-child)
        margin-right 32px

    &--wrapper
      +$gadgets()
        display block

    &--second
      +$middle()
        margin-top 16px

    &--mobile
      +$desktops()
        display none

      +$middle()
        display none

      +$narrow()
        display grid
        grid-gap 0 16px
        grid-template-columns 1fr 1fr

        > div
          display block

    &-gadgets
      +$middle()
        > img:first-child
          margin-right 16px

      +$narrow()
        width 100%
        display grid
        grid-gap 0 16px
        grid-template-columns 1fr 1fr
        margin-bottom 24px

  &__part
    display flex

    > *:not(:last-child)
      line-height 32px
      margin-right 8px

    &--social
      padding-top 24px

  &__form
    display flex

    +$narrow()
      display grid
      grid-gap 24px 0
      grid-template-columns 1fr

    &-grid
      display grid
      grid-gap 0 16px
      grid-template-columns 2fr 1fr

      +$narrow()
        display block

        > div:first-child
          margin-bottom 24px

  &__button
    width 117px
    margin-left 16px

    +$narrow()
      width 100%
      margin-left 0

  &__check
    margin-bottom 24px

  &__form-icon
    margin-bottom 16px

  &__form-title
    color $colors.harakiri
    color var(--harakiri)
    margin-bottom 8px
    $text("camembert")

    +$narrow()
      $text("burrata")

  &__form-subtitle
    color $colors.troy
    color var(--troy)
    margin-bottom 16px
    $text("parmigiano")
</style>
