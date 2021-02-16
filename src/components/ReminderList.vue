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

export default {
    components: {
        ReminderItem,
    },
    data() {
        return {
            reminders: [
                { note: 'example', date: '2019-01-01T10:15:00.000Z' },
                { note: 'example', date: '2019-01-01T10:15:00.000Z' },
                { note: 'example', date: '2019-01-01T10:15:00.000Z' },
                { note: 'example', date: '2019-01-01T10:15:00.000Z' },
                { note: 'example', date: '2019-01-01T10:15:00.000Z' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
