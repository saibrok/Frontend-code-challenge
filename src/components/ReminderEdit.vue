<template>
    <form class="edit-popup" @submit.prevent="submitReminder">
        <h2 class="edit-popup__title">Новое напоминание</h2>
        <div class="edit-popup__input-wrapper">
            <input
                class="edit-popup__input edit-popup__input-text"
                type="text"
                placeholder="Введите текст напоминания"
                v-model="reminder.note"
                ref="inputtext"
                :maxlength="maxLength"
            />
            <span class="edit-popup__counter">
                {{ maxLength - reminder.note.length }}
            </span>
        </div>
        <div class="edit-popup__input-wrapper">
            <input
                class="edit-popup__input edit-popup__input-date"
                type="datetime-local"
                v-model="reminder.date"
                :min="minDate"
                :max="maxDate"
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
            />
        </div>
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
            reminder: {
                id: '',
                note: '',
                date: '',
            },
            maxLength: '200',
            minDate: '2020-01-01T00:00',
            maxDate: '2050-01-01T00:00',
        };
    },

    computed: {
        ...mapState({
            isOpenPopup: 'isOpenPopup',
            isDataLoading: 'isDataLoading',
            currentReminder: (state) => state.reminders.currentReminder,
        }),

        disabled() {
            if (this.reminder.note.trim() && this.reminder.date) {
                return false;
            }

            return true;
        },
    },

    methods: {
        submitReminder() {
            this.$store.dispatch('reminders/submitReminder', this.reminder);
        },
    },

    mounted() {
        this.$refs.inputtext.focus();

        Object.assign(this.reminder, this.currentReminder);
    },
};
</script>

<style lang="scss" scoped>
.edit-popup {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.edit-popup__title {
    margin-bottom: 2rem;
}

.edit-popup__input-wrapper {
    position: relative;
}

.edit-popup__input {
    width: 100%;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 1px solid gray;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    outline: none;
    font-size: inherit;

    &-text {
        padding-right: 3.5rem;
    }
}

.edit-popup__counter {
    position: absolute;
    right: 0;
    top: 1rem;
    font-size: 0.8rem;
    color: darkgray;
}

.loader {
    margin: 0 auto;
}
</style>
