let nextId = 0;

const state = {
    notifications: [
        {
            type: 'error',
            message: 'Problem',
        },
        {
            type: 'success',
            message: "It's OK",
        },
        {
            type: 'attention',
            message: 'Текст напоминания',
        },
    ],
};

const mutations = {
    PUSH(state, notification) {
        state.notifications.push({
            ...notification,
            id: nextId++,
        });
    },
    DELETE(state, notificationToRemove) {
        state.notifications = state.notifications.filter(
            (notification) => notification.id !== notificationToRemove.id,
        );
    },
};

const actions = {
    add({ commit }, notification) {
        commit('PUSH', notification);
    },
    remove({ commit }, notificationToRemove) {
        commit('DELETE', notificationToRemove);
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
