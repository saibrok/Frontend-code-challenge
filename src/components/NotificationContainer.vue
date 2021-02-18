<template>
    <div class="notification-container">
        <NotificationBar
            :class="notification.type"
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
        />
    </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue';
import { mapState } from 'vuex';

export default {
    components: {
        NotificationBar,
    },

    computed: mapState('notification', ['notifications']),
};
</script>

<style scoped>
.notification-container {
    position: fixed;
    max-width: 50%;
    bottom: 0;
    right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>
