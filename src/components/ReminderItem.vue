<template>
    <li class="reminder">
        <div class="reminder__text">{{ reminder.note }}</div>
        <div class="reminder__date">{{ formatedDate }}</div>
        <div class="reminder__buttons">
            <TheButton class="reminder__edit-button"> 🖉 </TheButton>
            <TheButton
                class="reminder__delete-button"
                @onClick="deleteReminder(reminder.id)"
            >
                ✖️
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

    computed: {
        formatedDate() {
            return new Date(this.reminder.date).toLocaleString().slice(0, -3);
        },
    },

    methods: {
        deleteReminder(reminderId) {
            this.$store.dispatch('reminders/deleteReminder', reminderId);
        },
    },
};
</script>

<style lang="scss" scoped>
.reminder {
    display: flex;
    justify-content: space-between;
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

.reminder__edit-button {
    margin-right: 1rem;
    color: lightsteelblue;
    background-color: royalblue;
}

.reminder__delete-button {
    color: wheat;
    background-color: indianred;
}
</style>
