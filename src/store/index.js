import Vue from 'vue';
import Vuex from 'vuex';

import reminders from '@/store/modules/reminders';
import user from '@/store/modules/user';
import notification from '@/store/modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDataLoading: false,
        isOpenPopup: false,
        popupContent: 'ReminderEdit',
    },

    mutations: {
        SET_LOADING_STATUS(state, status) {
            state.isDataLoading = status;
        },

        SET_POPUP_CONTENT(state, content) {
            state.popupContent = content;
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

        setPopupContent({ commit }, content) {
            commit('SET_POPUP_CONTENT', content);
        },

        openPopup({ commit }) {
            commit('OPEN_POPUP');
        },

        closePopup({ commit, dispatch }) {
            commit('CLOSE_POPUP');
            dispatch('reminders/clearCurrentReminder');
        },
    },

    modules: {
        reminders,
        user,
        notification,
    },
});
