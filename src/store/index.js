import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import reminders from '@/store/modules/reminders';
import user from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDataLoading: false,
    },

    mutations: {
        SET_LOADING_STATUS(state, status) {
            state.isDataLoading = status;
        },
    },

    actions: {
        setLoadingStatus({ commit }, status) {
            commit('SET_LOADING_STATUS', status);
        },
    },

    modules: {
        auth,
        reminders,
        user,
    },
});
