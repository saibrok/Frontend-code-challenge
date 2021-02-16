import api from '@/services/api';

const mutations = {};

const actions = {
    auth: ({ dispatch }) => {
        api.auth().then((result) => {
            dispatch('user/login', result.data, { root: true });
        });
    },
};

export default {
    namespaced: true,
    mutations,
    actions,
};
