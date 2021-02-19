<template>
    <div class="reminder-view">
        <div class="reminder-view__text">
            {{ currentReminder.note }}
        </div>
        <div class="reminder-view__input-date">
            {{ formatedDate }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            currentReminder: (state) => state.reminders.currentReminder,
        }),
        formatedDate() {
            return new Date(this.currentReminder.date)
                .toLocaleString()
                .slice(0, -3);
        },
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
