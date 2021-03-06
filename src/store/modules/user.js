import api from '@/services/api';

const state = {
    user: {
        id: '',
        name: '',
    },
};

const getters = {
    isAuthorized: (state) => !!state.user.id,
    getUserId: (state) => state.user.id,
};

const mutations = {
    LOGIN(state, user) {
        localStorage.name = user.name;
        localStorage.id = user.id;
    },

    SET_USER(state) {
        state.user.name = localStorage.name;
        state.user.id = localStorage.id;
    },

    LOGOUT(state) {
        state.user.name = '';
        state.user.id = '';
        localStorage.name = '';
        localStorage.id = '';
    },
};

const actions = {
    login({ commit, dispatch }) {
        dispatch('setLoadingStatus', true, { root: true });
        api.auth()
            .then((result) => {
                commit('LOGIN', result.data);
            })
            .then(() => {
                dispatch('setUser');
                // dispatch('setLoadingStatus', false, { root: true });

                const notification = {
                    type: 'success',
                    message: 'Вход выполнен',
                };
                dispatch('notification/add', notification, { root: true });
            })
            .catch((error) => {
                console.error(error);
                dispatch('setLoadingStatus', false, { root: true });

                const notification = {
                    type: 'error',
                    message: 'Problem: ' + error.message,
                };
                dispatch('notification/add', notification, { root: true });
            });
    },

    logout({ commit, dispatch }) {
        commit('LOGOUT');
        dispatch('reminders/clearReminders', null, { root: true });
        dispatch('reminders/setFilter', 'all', { root: true });

        const notification = {
            type: 'success',
            message: 'Выход выполнен',
        };
        dispatch('notification/add', notification, { root: true });
    },

    setUser({ commit, dispatch }) {
        commit('SET_USER');
        dispatch('reminders/fetchReminders', null, { root: true });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
