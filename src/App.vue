<template>
    <div id="app">
        <div class="reminders">
            <header class="reminders__header">
                <h1 class="reminders__title">Reminders</h1>
                <TheButton
                    v-if="!isAuthorized"
                    class="reminders__login"
                    @onClick="login"
                >
                    Войти
                </TheButton>
                <TheButton v-else class="reminders__login" @onClick="logout">
                    Выйти
                </TheButton>
            </header>

            <TheWatch />

            <TheUser class="reminders__user" />

            <TheButton
                class="reminders__add"
                @onClick="openPopup"
                :disabled="!isAuthorized"
            >
                Добавить +
            </TheButton>

            <ReminderList />
        </div>

        <ThePopup v-if="isOpenPopup">
            <component :is="popupContent" />
        </ThePopup>

        <NotificationContainer />
    </div>
</template>

<script>
import NotificationContainer from './components/NotificationContainer.vue';
import ReminderEdit from './components/ReminderEdit.vue';
import ReminderList from './components/ReminderList.vue';
import ReminderView from './components/ReminderView.vue';
import TheButton from './components/TheButton.vue';
import ThePopup from './components/ThePopup.vue';
import TheUser from './components/TheUser.vue';
import TheWatch from './components/TheWatch.vue';

import { mapState, mapGetters } from 'vuex';

export default {
    name: 'App',
    components: {
        TheUser,
        ReminderList,
        TheButton,
        ReminderView,
        ReminderEdit,
        NotificationContainer,
        ThePopup,
        TheWatch,
    },

    data() {
        return {
            user: this.$store.state.user.user,
        };
    },

    computed: {
        ...mapGetters('user', ['isAuthorized']),
        ...mapState(['isOpenPopup', 'popupContent']),
    },

    methods: {
        login() {
            this.$store.dispatch('user/login');
        },

        logout() {
            this.$store.dispatch('user/logout');
        },

        openPopup() {
            this.$store.dispatch('setPopupContent', 'ReminderEdit');
            this.$store.dispatch('openPopup');
        },
    },

    mounted() {
        if (localStorage.name && localStorage.id) {
            this.$store.dispatch('user/setUser');
        } else {
            this.$store.dispatch('user/logout');
        }
    },
};
</script>

<style lang="scss">
@import './styles/common.scss';

#app {
    width: 800px;
    margin: 60px auto;
    padding: 2rem 4rem;
    border-radius: 0.5rem;
    box-shadow: 0px 8px 16px 8px rgba(34, 60, 80, 0.1);
    background-color: white;
}

.reminders {
    display: flex;
    flex-direction: column;
}

.reminders__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.reminders__user {
    margin-bottom: 2rem;
}

.reminders__add {
    margin-bottom: 2rem;
}
</style>
