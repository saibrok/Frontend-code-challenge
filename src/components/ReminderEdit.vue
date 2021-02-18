<template>
    <form class="edit-popup" @submit.prevent="submitReminder">
        <h2 class="edit-popup__title">Новое напоминание</h2>
        <TheButton class="edit-popup__close-button" @onClick="closePopup">
            X
        </TheButton>
        <div class="edit-popup__input-wrapper">
            <input
                class="edit-popup__input edit-popup__input-text"
                type="text"
                placeholder="Введите текст напоминания"
                v-model="note"
                ref="inputtext"
                :maxlength="maxLength"
            />
            <span class="edit-popup__counter"
                >{{ note.length }} / {{ maxLength }}</span
            >
        </div>
        <div class="edit-popup__input-wrapper">
            <input
                class="edit-popup__input edit-popup__input-date"
                type="datetime-local"
                v-model="date"
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
            id: '',
            note: '',
            date: '',
            maxLength: '200',
            minDate: '2000-01-01T00:00',
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
        this.date = this.currentReminder.date;
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
</style>
