import { Module } from 'vuex';

// API
// import { APIService } from '@/utils/api';

// Types
import type { IStore, IStoreModule, TFieldPayload } from '../../models/store';

const initialState: IStoreModule = () => ({});
const initial = initialState;

const api: Module<IStoreModule, IStore> = {
  namespaced: true,
  state: initial,

  getters: {},

  actions: {
    setApiState: ({ commit }, payload: TFieldPayload): void => {
      commit('setApiState', payload);
    },
  },

  mutations: {
    setApiState: (state: IStoreModule, payload: TFieldPayload): void => {
      state[payload.field] = payload.value;
    },
  },
};

export default api;
