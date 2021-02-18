import api from '@/services/api';

const state = {
    reminders: [],
    filteredReminders: [],
    currentFilter: 'all',
    currentReminder: {
        id: '',
        note: '',
        date: '',
    },
};

const getters = {
    allReminders: (state) => state.reminders,

    activeReminders: (state) =>
        state.reminders.filter((reminder) => {
            return new Date(reminder.date) > new Date();
        }),

    overdueReminders: (state) =>
        state.reminders.filter((reminder) => {
            return new Date(reminder.date) <= new Date();
        }),
};

const mutations = {
    SET_REMINDERS(state, reminders) {
        state.reminders = reminders;
    },

    SET_FILTER(state, filter) {
        state.currentFilter = filter;
    },

    SET_FILTERED_REMINDERS(state, filteredReminders) {
        state.filteredReminders = filteredReminders;
    },

    CLEAR_REMINDERS(state) {
        state.reminders = [];
        state.filteredReminders = [];
    },

    SET_CURRENT_REMINDER(state, reminder) {
        state.currentReminder = reminder;
    },

    CLEAR_CURRENT_REMINDER(state) {
        state.currentReminder.id = '';
        state.currentReminder.note = '';
        state.currentReminder.date = '';
    },
};

const actions = {
    fetchReminders({ commit, rootGetters, dispatch }) {
        dispatch('setLoadingStatus', true, { root: true });
        const userId = rootGetters['user/getUserId'];

        api.getReminders(userId)
            .then((result) => {
                const reminders = result.data;
                dispatch('sortAndFormatReminders', reminders);
                commit('SET_REMINDERS', reminders);
                dispatch('filterReminders');
                dispatch('setLoadingStatus', false, { root: true });

                const notification = {
                    type: 'success',
                    message: 'Напоминания обновлены',
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

        const newDate = new Date(reminder.date);
        newDate.setTime(
            newDate.getTime() - newDate.getTimezoneOffset() * 60 * 1000,
        );
        reminder.date = newDate;

        api.createReminder({ userId, reminder })
            .then(() => {
                dispatch('fetchReminders');
                dispatch('setLoadingStatus', false, { root: true });
                dispatch('closePopup', null, { root: true });

                const notification = {
                    type: 'success',
                    message: 'Напоминание создано',
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

    editReminder({ rootGetters, dispatch }, { reminderId, newReminder }) {
        dispatch('setLoadingStatus', true, { root: true });
        const userId = rootGetters['user/getUserId'];

        const newDate = new Date(newReminder.date);
        newDate.setTime(
            newDate.getTime() - newDate.getTimezoneOffset() * 60 * 1000,
        );
        newReminder.date = newDate;

        api.editReminder({ userId, reminderId, newReminder })
            .then(() => {
                dispatch('fetchReminders');
                dispatch('setLoadingStatus', false, { root: true });
                dispatch('closePopup', null, { root: true });

                const notification = {
                    type: 'success',
                    message: 'Напоминание изменено',
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

    deleteReminder({ rootGetters, dispatch }, reminderId) {
        dispatch('setLoadingStatus', true, { root: true });
        const userId = rootGetters['user/getUserId'];

        api.deleteReminder({ userId, reminderId })
            .then(() => {
                state.reminders = state.reminders.filter((reminder) => {
                    return reminder.id !== reminderId;
                });
                dispatch('filterReminders');
                dispatch('setLoadingStatus', false, { root: true });

                const notification = {
                    type: 'success',
                    message: 'Напоминание удалено',
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

    submitReminder({ dispatch }, reminder) {
        const newReminder = { note: reminder.note, date: reminder.date };
        const reminderId = reminder.id;

        if (reminder.id === '') {
            dispatch('createReminder', newReminder);
        } else {
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

    sortAndFormatReminders(context, reminders) {
        reminders.forEach((reminder) => {
            reminder.date = new Date(reminder.date).toISOString().slice(0, -8);
        });
        reminders.sort((a, b) => (a['date'] > b['date'] ? 1 : -1));
    },

    setFilter({ commit, dispatch }, filter) {
        commit('SET_FILTER', filter);
        dispatch('filterReminders');
    },

    filterReminders({ commit }) {
        if (state.currentFilter === 'all') {
            commit('SET_FILTERED_REMINDERS', state.reminders);
        } else if (state.currentFilter === 'active') {
            commit(
                'SET_FILTERED_REMINDERS',
                state.reminders.filter((reminder) => {
                    return new Date(reminder.date) > new Date();
                }),
            );
        } else if (state.currentFilter === 'overdue') {
            commit(
                'SET_FILTERED_REMINDERS',
                state.reminders.filter((reminder) => {
                    return new Date(reminder.date) <= new Date();
                }),
            );
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
