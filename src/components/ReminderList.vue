<template>
    <div class="reminders__wrapper">
        <template v-if="isAuthorized">
            <FilterList @toggleFilter="toggleFilter" />
            <ul class="reminders__list">
                <ReminderItem
                    v-for="reminder of filteredReminders"
                    :key="reminder.id"
                    :reminder="reminder"
                />
            </ul>
        </template>
        <div
            v-if="isAuthorized && filteredReminders.length <= 0"
            class="reminders__empty"
        >
            Список напоминаний пуст
        </div>
        <TheLoader class="loader" v-if="isDataLoading" />
    </div>
</template>

<script>
import ReminderItem from './ReminderItem.vue';
import FilterList from './FilterList.vue';
import TheLoader from './TheLoader.vue';

import { mapGetters, mapState } from 'vuex';

export default {
    components: {
        ReminderItem,
        FilterList,
        TheLoader,
    },

    computed: {
        ...mapGetters({
            all: 'reminders/allReminders',
            active: 'reminders/activeReminders',
            overdue: 'reminders/overdueReminders',
            isAuthorized: 'user/isAuthorized',
        }),

        ...mapState({
            reminders: (state) => state.reminders.reminders,
            filteredReminders: (state) => state.reminders.filteredReminders,
            isDataLoading: (state) => state.isDataLoading,
        }),
    },

    methods: {
        toggleFilter(filter) {
            this.$store.dispatch('reminders/setFilter', filter);
            this.$store.dispatch('reminders/filterReminders', filter);
        },
    },
};
</script>

<style lang="scss" scoped>
.reminders__wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.reminders__empty {
    text-align: center;
}

.loader {
    align-self: center;
}
</style>
