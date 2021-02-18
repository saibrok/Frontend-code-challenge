<template>
    <div class="reminders__wrapper">
        <FilterList @toggleFilter="toggleFilter" />

        <ul v-if="filteredReminders.length > 0" class="reminders__list">
            <ReminderItem
                v-for="reminder of filteredReminders"
                :key="reminder.id"
                :reminder="reminder"
            />
        </ul>
        <div v-else-if="isAuthorized" class="reminders__empty">
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

    data() {
        return {
            filteredReminders: '',
        };
    },

    computed: {
        ...mapGetters({
            all: 'reminders/allReminders',
            active: 'reminders/activeReminders',
            overdue: 'reminders/overdueReminders',
            isAuthorized: 'user/isAuthorized',
        }),
        ...mapState(['isDataLoading']),
        ...mapState('reminders', ['reminders']),
    },

    methods: {
        toggleFilter(filter) {
            this.filteredReminders = this[filter];
        },
    },

    mounted() {
        this.filteredReminders = this.reminders;
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
