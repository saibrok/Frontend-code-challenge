<template>
    <transition name="slide-fade" appear>
        <div class="notification-bar">
            <span class="notification-bar__title">
                {{ notification.message }}
            </span>
            <TheButton class="notification-bar__button" @onClick="close">
                🗑️
            </TheButton>
        </div>
    </transition>
</template>

<script>
import { mapActions } from 'vuex';
import TheButton from './TheButton.vue';

export default {
    components: { TheButton },

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

    methods: {
        ...mapActions('notification', ['remove']),

        close() {
            this.remove(this.notification);
        },
    },

    mounted() {
        if (this.notification.type !== 'attention') {
            this.timeout = setTimeout(
                () => this.remove(this.notification),
                5000,
            );
        }
    },

    beforeDestroy() {
        clearTimeout(this.timeout);
    },
};
</script>

<style scoped>
.notification-bar {
    display: flex;
    align-items: center;
    max-width: 100%;
    padding: 1.5rem 1rem 1.5rem 2rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    box-shadow: 0px 4px 8px 2px rgba(34, 60, 80, 0.2);
    color: white;
}

.notification-bar__title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.notification-bar__button {
    background-color: transparent;
}

.error {
    background-color: indianred;
}

.success {
    background-color: mediumseagreen;
}

.attention {
    background-color: moccasin;
    color: #2c3e50;
}

/* Анимации появления и исчезновения */

.slide-fade-enter-active {
    transition: all 0.5s ease;
}
.slide-fade-leave-active {
    transition: all 0.5s ease;
}
.slide-fade-enter {
    transform: translateY(500px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(500px);
    opacity: 0;
}
</style>
