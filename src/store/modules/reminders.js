import api from '@/services/api';

const state = {
    reminders: [],
};

const mutations = {
    SET_REMINDERS(state, reminders) {
        state.reminders = reminders;
    },

    CLEAR_REMINDERS(state) {
        state.reminders = [];
    },
};

const actions = {
    fetchReminders({ commit, rootGetters, dispatch }) {
        dispatch('setLoadingStatus', true, { root: true });
        const userId = rootGetters['user/getUserId'];

        api.getAllReminders(userId)
            .then((result) => {
                commit('SET_REMINDERS', result.data);
                dispatch('setLoadingStatus', false, { root: true });
            })
            .catch((error) => {
                console.error(error);
                dispatch('setLoadingStatus', false, { root: true });
            });
    },

    createReminder({ rootGetters, dispatch }, reminder) {
        dispatch('setLoadingStatus', true, { root: true });
        const userId = rootGetters['user/getUserId'];
        api.createReminder({ userId, reminder })
            .then(() => {
                state.reminders.push(reminder);
                dispatch('setLoadingStatus', false, { root: true });
                dispatch('closePopup', null, { root: true });
            })
            .catch((error) => {
                console.error(error);
                dispatch('setLoadingStatus', false, { root: true });
            });
    },

    deleteReminder({ rootGetters, dispatch }, reminderId) {
        dispatch('setLoadingStatus', true, { root: true });
        const userId = rootGetters['user/getUserId'];
        api.deleteReminder({ userId, reminderId })
            .then(() => {
                state.reminders = state.reminders.filter((reminder) => {
                    return reminder.id !== reminderId;
                });
                dispatch('setLoadingStatus', false, { root: true });
            })
            .catch((error) => {
                console.error(error);
                dispatch('setLoadingStatus', false, { root: true });
            });
    },

    clearReminders({ commit }) {
        commit('CLEAR_REMINDERS');
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
