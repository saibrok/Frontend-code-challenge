<template>
    <div class="reminders__wrapper">
        <ul v-if="reminders.length > 0" class="reminders__list">
            <ReminderItem
                v-for="(reminder, index) of reminders"
                :key="index"
                :reminder="reminder"
            />
        </ul>
        <div v-else-if="true" class="reminders__empty">
            Список напоминаний пуст
        </div>
    </div>
</template>

<script>
import ReminderItem from './ReminderItem.vue';

import { mapState } from 'vuex';

export default {
    components: {
        ReminderItem,
    },

    computed: mapState({
        reminders: (state) => state.reminders.reminders,
    }),
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
</style>
