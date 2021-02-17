import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import reminders from '@/store/modules/reminders';
import user from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDataLoading: false,
        isOpenPopup: false,
    },

    mutations: {
        SET_LOADING_STATUS(state, status) {
            state.isDataLoading = status;
        },

        OPEN_POPUP(state) {
            state.isOpenPopup = true;
        },

        CLOSE_POPUP(state) {
            state.isOpenPopup = false;
        },
    },

    actions: {
        setLoadingStatus({ commit }, status) {
            commit('SET_LOADING_STATUS', status);
        },

        openPopup({ commit }) {
            commit('OPEN_POPUP');
        },

        closePopup({ commit }) {
            commit('CLOSE_POPUP');
        },
    },

    modules: {
        auth,
        reminders,
        user,
    },
});
