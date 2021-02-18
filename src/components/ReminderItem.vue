<template>
    <li class="reminder" :class="{ expired: expired }">
        <div class="reminder__text">{{ reminder.note }}</div>
        <div class="reminder__date">{{ formatedDate }}</div>
        <div class="reminder__buttons">
            <TheButton class="reminder__edit-button" @onClick="editReminder">
                ✒️
            </TheButton>
            <TheButton
                class="reminder__delete-button"
                @onClick="deleteReminder(reminder.id)"
            >
                🗑️
            </TheButton>
        </div>
    </li>
</template>

<script>
import TheButton from './TheButton.vue';
export default {
    components: { TheButton },

    props: {
        reminder: {
            type: Object,
        },
    },

    data() {
        return {
            expired: false,
            interval: null,
        };
    },

    computed: {
        formatedDate() {
            return new Date(this.reminder.date).toLocaleString().slice(0, -3);
        },
    },

    methods: {
        editReminder() {
            const currentReminder = Object.assign({}, this.reminder);
            this.$store.dispatch(
                'reminders/setCurrentReminder',
                currentReminder,
            );
            this.$store.dispatch('openPopup');
        },

        deleteReminder(reminderId) {
            this.$store.dispatch('reminders/deleteReminder', reminderId);
        },
    },

    mounted() {
        if (+new Date(this.reminder.date) < Date.now()) {
            this.expired = true;
        }

        const notification = {
            type: 'attention',
            message: this.reminder.note,
        };

        if (this.expired === false) {
            this.interval = setInterval(() => {
                if (+new Date(this.reminder.date) < Date.now()) {
                    this.$store.dispatch('notification/add', notification, {
                        root: true,
                    });
                    this.expired = true;
                    clearInterval(this.interval);
                }
            }, 1000);
        }
    },

    beforeDestroy() {
        clearInterval(this.interval);
    },
};
</script>

<style lang="scss" scoped>
.reminder {
    display: grid;
    grid-template-columns: 2.3fr 1fr 0.9fr;
    column-gap: 1rem;
    align-items: center;

    padding: 1rem 2rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px 2px rgba(34, 60, 80, 0.2);
    margin-bottom: 1rem;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0px 8px 8px 4px rgba(34, 60, 80, 0.2);
    }
}

.reminder__text {
    word-break: break-word;
}

.reminder__edit-button {
    margin-right: 1rem;
    color: lightsteelblue;
    background-color: royalblue;
}

.reminder__delete-button {
    color: wheat;
    background-color: indianred;
}

.expired {
    background-color: pink;
}
</style>
