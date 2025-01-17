import { Module } from 'vuex';

// API
import { APIService } from '@/utils/api';

// Types
import type { IStore, IStoreModule, TFieldPayload } from '../../models/store';

const initialState: IStoreModule = () => ({
  isSuccess: false,
  isError: false,
});
const initial = initialState;

const name = 'api';

const api: Module<IStoreModule, IStore> = {
  namespaced: true,
  state: initial,

  getters: {
    isSuccess: (state: IStoreModule) => state.isSuccess,
    isError: (state: IStoreModule) => state.isError,
  },

  actions: {
    setApiState: ({ commit }, payload: TFieldPayload): void => {
      commit('setApiState', payload, { root: true });
    },

    nullForm: ({ commit }): void => {
      commit('nullForm');
    },

    postForm: ({ commit }, payload): void => {
      console.log(`Store/${name} postForm action:`, payload);
      APIService.postForm(payload)
        .then((response) => {
          console.log(`Store/${name} postForm action SUCCESS!!!`, response);
          commit(
            `${name}/setApiState`,
            { field: 'isSuccess', value: true },
            { root: true },
          );
        })
        .catch((err) => {
          console.log(`Store/${name} postForm action ERROR: `, err);
          commit(
            `${name}/setApiState`,
            { field: 'isError', value: true },
            { root: true },
          );
        });
    },
  },

  mutations: {
    setApiState: (state: IStoreModule, payload: TFieldPayload): void => {
      state[payload.field] = payload.value;
    },

    nullForm: (state: IStoreModule): void => {
      state.isSuccess = false;
      state.isError = false;
    },
  },
};

export default api;
