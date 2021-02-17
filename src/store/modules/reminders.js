import api from '@/services/api';

const state = {
    reminders: [],
    currentReminder: {
        id: '',
        note: '',
        date: new Date().toISOString(),
    },
};

const mutations = {
    SET_REMINDERS(state, reminders) {
        state.reminders = reminders;
    },

    CLEAR_REMINDERS(state) {
        state.reminders = [];
    },

    SET_CURRENT_REMINDER(state, reminder) {
        state.currentReminder = reminder;
    },

    CLEAR_CURRENT_REMINDER(state) {
        state.currentReminder.id = '';
        state.currentReminder.note = '';
        state.currentReminder.date = new Date().toISOString();
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

                const notification = {
                    type: 'success',
                    message: 'Напоминания загружены',
                };
                dispatch('notification/add', notification, { root: true });
            })
            .catch((error) => {
                console.error(error);
                dispatch('setLoadingStatus', false, { root: true });

                const notification = {
                    type: 'error',
                    message: 'Problem ' + error.message,
                };
                dispatch('notification/add', notification, { root: true });
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

    editReminder({ rootGetters, dispatch }, { reminderId, newReminder }) {
        dispatch('setLoadingStatus', true, { root: true });
        const userId = rootGetters['user/getUserId'];

        api.editReminder({ userId, reminderId, newReminder })
            .then(() => {
                state.reminders = state.reminders.filter((reminder) => {
                    return reminder.id !== reminderId;
                });
                state.reminders.push(newReminder);
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

    submitReminder({ dispatch }, reminder) {
        const newReminder = { note: reminder.note, date: reminder.date };
        const reminderId = reminder.id;

        if (reminder.id === '') {
            console.log(newReminder);
            dispatch('createReminder', newReminder);
        } else {
            console.log(reminderId);
            console.log(newReminder);
            dispatch('editReminder', { reminderId, newReminder });
        }
    },

    clearReminders({ commit }) {
        commit('CLEAR_REMINDERS');
    },

    setCurrentReminder({ commit }, reminder) {
        commit('SET_CURRENT_REMINDER', reminder);
    },

    clearCurrentReminder({ commit }) {
        commit('CLEAR_CURRENT_REMINDER');
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
