import { Module } from 'vuex';

// Types
import type { IStore, IStoreModule, TFieldPayload } from '../../models/store';

// Constants
import { Themes } from '@/utils/constants';

const initialState: IStoreModule = () => ({
  theme: Themes.default,
});
const initial = initialState;

const persist: Module<IStoreModule, IStore> = {
  namespaced: true,
  state: initial,

  getters: {
    theme: (state: IStoreModule) => state.theme,
  },

  actions: {
    setPersistState: (context, payload: TFieldPayload): void => {
      context.commit('setPersistState', payload);
    },
  },

  mutations: {
    setPersistState: (state: IStoreModule, payload: TFieldPayload): void => {
      state[payload.field] = payload.value;
    },
  },
};

export default persist;
