<template>
    <div class="reminder-view">
        <div class="reminder-view__text">
            {{ currentReminder.note }}
        </div>
        <div class="reminder-view__input-date">
            {{ currentReminder.date | formatDate }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import formatDate from '@/filters/formatDate';

export default {
    filters: {
        formatDate,
    },

    computed: {
        ...mapState({
            currentReminder: (state) => state.reminders.currentReminder,
        }),
    },
};
</script>

<style lang="scss" scoped>
.reminder-view {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.reminder-view__text {
    margin-right: 4rem;
    margin-bottom: 2rem;
    word-break: break-word;
}

.reminder-view__input-date {
    font-weight: bold;
}
</style>
