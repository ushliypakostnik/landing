<template>
  <div class="modal" id="app__modal">
    <div v-if="!isViewport" class="modal__content">
      <Icon class="modal__close" name="modal-close" @click.prevent="close" />

      <div class="modal__wrapper">
        <template v-if="!(isSuccess || isError)">
          <slot />
        </template>

        <template v-else-if="isError">
          <Icon class="modal__icon" name="error" />
          <div class="modal__title">Ошибка отправки</div>
          <div class="modal__subtitle">
            Что-то пошло не так. Пожалуйста, повторите попытку позже
          </div>
          <Button
            size="helike"
            skin="secondary"
            is-wide
            @click.prevent="nullForm()"
            >Отправить</Button
          >
        </template>

        <template v-else-if="isSuccess">
          <Icon class="modal__icon" name="success" />
          <div class="modal__title">Заявка отправлена</div>
          <div class="modal__subtitle">
            Наш менеджер свяжется с вами, чтобы обсудить детали и договориться
            об удобном времени
          </div>
          <Button size="helike" is-wide @click.prevent="close()">Хорошо</Button>
        </template>
      </div>
    </div>

    <slot v-else />
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import { defineComponent, watch, computed } from 'vue';

// Component
import Icon from '@/components/ds/Icon.vue';
import Button from '@/components/ds/Button.vue';

export default defineComponent({
  name: 'Modal',

  components: {
    Icon,
    Button,
  },

  props: {
    isViewport: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  setup() {
    const store = useStore(key);

    let close: () => void;
    let nullForm: () => void;
    const modal = computed(() => store.getters['layout/modal']);
    const theme = computed(() => store.getters['persist/theme']);
    const isSuccess = computed(() => store.getters['api/isSuccess']);
    const isError = computed(() => store.getters['api/isError']);

    nullForm = () => {
      store.dispatch('api/nullForm');
    };

    close = () => {
      store.dispatch('api/nullForm').then(() => {
        store.dispatch('layout/setLayoutState', {
          field: 'modal',
          value: null,
        });
      });
    };

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

    return {
      theme,
      isSuccess,
      isError,
      close,
      nullForm,
    };
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

  &__content
    @extend $flexCenter
    position relative
    width 100%
    height 100%
    background $colors.amelie
    background var(--amelie)

  &__wrapper
    width 842px

    +$wide()
      width 618px

    +$middle()
      width 350px

    +$narrow()
      padding-left 24px
      padding-right 24px
      width 100%

  &__close
    cursor pointer
    position absolute
    top 20px
    right 20px

  &__icon
    margin-bottom 16px

  &__title
    color $colors.harakiri
    color var(--harakiri)
    margin-bottom 16px
    $text("camembert")

    +$narrow()
      $text("burrata")

  &__subtitle
    color $colors.troy
    color var(--troy)
    margin-bottom 24px
    $text("parmigiano")
</style>
