<template>
    <div class="edit-popup">
        <h2 class="edit-popup__title">Новое напоминание</h2>
        <TheButton class="edit-popup__close-button">X</TheButton>
        <input
            class="edit-popup__input"
            type="text"
            placeholder="Введите текст напоминания"
        />
        <input class="edit-popup__input" type="datetime-local" />
        <TheButton class="edit-popup__save-button">Сохранить</TheButton>
    </div>
</template>

<script>
import TheButton from './TheButton.vue';
export default {
    components: {
        TheButton,
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
