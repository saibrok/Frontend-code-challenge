<template>
    <div id="app">
        <div class="reminders">
            <header class="reminders__header">
                <h1 class="reminders__title">Reminders</h1>
                <TheButton class="reminders__login"> Войти </TheButton>
            </header>
            <TheUser class="reminders__user" />
            <TheButton class="reminders__add"> Добавить + </TheButton>
            <ReminderList />
        </div>
        <div v-if="false" class="wrapper">
            <ReminderEdit class="reminder-edit" />
        </div>
    </div>
</template>

<script>
import ReminderEdit from './components/ReminderEdit.vue';
import ReminderList from './components/ReminderList.vue';
import TheButton from './components/TheButton.vue';
import TheUser from './components/TheUser.vue';

export default {
    name: 'App',
    components: {
        TheUser,
        ReminderList,
        TheButton,
        ReminderEdit,
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

.wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(#555, 0.7);
}

.reminder-edit {
    width: 600px;
    padding: 2rem 4rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0px 8px 16px 8px rgba(34, 60, 80, 0.1);
}
</style>
