<template>
    <ul>
        <ReminderItem
            v-for="(reminder, index) of reminders"
            :key="index"
            :reminder="reminder"
        />
    </ul>
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

<style lang="scss" scoped></style>
