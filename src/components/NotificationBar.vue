<template>
    <div class="notification-bar">
        {{ notification.message }}
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        notification: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            timeout: null,
        };
    },

    mounted() {
        this.timeout = setTimeout(() => this.remove(this.notification), 5000);
    },

    beforeDestroy() {
        clearTimeout(this.timeout);
    },

    methods: mapActions('notification', ['remove']),
};
</script>

<style scoped>
.notification-bar {
    padding: 1.5rem 2rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    box-shadow: 0px 4px 8px 2px rgba(34, 60, 80, 0.2);
    color: white;
}

.error {
    background-color: indianred;
}

.success {
    background-color: MediumSeaGreen;
}

.attention {
    background-color: Moccasin;
    color: #2c3e50;
}
</style>
