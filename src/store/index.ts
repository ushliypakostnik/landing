import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import api from '@/store/modules/api';
import persist from '@/store/modules/persist';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    name: string;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

// define your typings for the store state
export interface State {
  name: string;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

const debug: boolean = process.env.NODE_ENV !== 'production';

export const store = createStore<State>({
  strict: debug,
  state: {
    name: 'store',
  },
  modules: {
    api,
    persist,
  },
  plugins: [
    createPersistedState({
      paths: ['persist'],
    }),
  ],
});
