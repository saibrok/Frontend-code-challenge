<template>
    <form class="edit-popup" @submit.prevent="submitReminder">
        <h2 class="edit-popup__title">Новое напоминание</h2>
        <TheButton class="edit-popup__close-button" @onClick="closePopup">
            X
        </TheButton>
        <input
            class="edit-popup__input"
            type="text"
            placeholder="Введите текст напоминания"
            v-model="note"
            ref="inputtext"
        />
        <input
            class="edit-popup__input"
            type="datetime-local"
            v-model="date"
            :min="date"
        />
        <TheLoader class="loader" v-if="isDataLoading" />
        <TheButton
            v-else
            :type="'submit'"
            :disabled="disabled"
            class="edit-popup__save-button"
        >
            Сохранить
        </TheButton>
    </form>
</template>

<script>
import TheButton from './TheButton.vue';
import TheLoader from './TheLoader.vue';

import { mapState } from 'vuex';

export default {
    components: {
        TheButton,
        TheLoader,
    },

    data() {
        return {
            id: '',
            note: '',
            date: '',
        };
    },

    computed: {
        ...mapState({
            isOpenPopup: 'isOpenPopup',
            isDataLoading: 'isDataLoading',
            currentReminder: (state) => state.reminders.currentReminder,
        }),

        disabled() {
            if (this.note.trim() && this.date) {
                return false;
            }

            return true;
        },
    },

    methods: {
        submitReminder() {
            this.$store.dispatch('reminders/submitReminder', {
                id: this.id,
                note: this.note,
                date: this.date,
            });
        },

        closePopup() {
            this.$store.dispatch('closePopup');
        },
    },

    mounted() {
        this.$refs.inputtext.focus();

        this.id = this.currentReminder.id;
        this.note = this.currentReminder.note;
        this.date = this.currentReminder.date.toLocaleString().slice(0, -8);
    },
};
</script>

<style lang="scss" scoped>
.edit-popup {
    position: relative;
    display: flex;
    flex-direction: column;
}

.edit-popup__title {
    margin-bottom: 2rem;
}

.edit-popup__close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
}

.edit-popup__input {
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 1px solid gray;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    outline: none;
    font-size: inherit;
}
</style>
