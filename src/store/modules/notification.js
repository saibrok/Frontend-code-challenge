let nextId = 0;

const state = {
    notifications: [
        {
            id: 132,
            type: 'error',
            message: 'example: Problem',
        },
        {
            id: 133,
            type: 'success',
            message: "example: It's OK",
        },
        {
            id: 134,
            type: 'attention',
            message: 'example: Текст напоминания',
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
