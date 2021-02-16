import api from '@/services/api';

const state = {
    reminders: [
        { note: 'example', date: '2019-01-01T10:15:00.000Z' },
        { note: 'example', date: '2019-01-01T10:15:00.000Z' },
        { note: 'example', date: '2019-01-01T10:15:00.000Z' },
        { note: 'example', date: '2019-01-01T10:15:00.000Z' },
        { note: 'example', date: '2019-01-01T10:15:00.000Z' },
    ],
};

const mutations = {
    SET_REMINDERS(state, reminders) {
        state.reminders = reminders;
    },
};

const actions = {
    fetchReminders({ commit, dispatch }) {
        dispatch('setLoadingStatus', true, { root: true });
        api.getAllReminders('vAxHkse8YHtpvYJJNys4')
            .then((result) => {
                console.log(result);
                commit('SET_REMINDERS', result.data);
                dispatch('setLoadingStatus', false, { root: true });
            })
            .catch((error) => {
                console.error(error);
                dispatch('setLoadingStatus', false, { root: true });
            });
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
