import { Module } from 'vuex';

// Types
import type { IStore, IStoreModule, TFieldPayload } from '../../models/store';

const initialState: IStoreModule = () => ({
  modal: null,
});
const initial = initialState;

const persist: Module<IStoreModule, IStore> = {
  namespaced: true,
  state: initial,

  getters: {
    modal: (state: IStoreModule) => state.modal,
  },

  actions: {
    setLayoutState: (context, payload: TFieldPayload): void => {
      context.commit('setLayoutState', payload);
    },
  },

  mutations: {
    setLayoutState: (state: IStoreModule, payload: TFieldPayload): void => {
      state[payload.field] = payload.value;
    },
  },
};

export default persist;
