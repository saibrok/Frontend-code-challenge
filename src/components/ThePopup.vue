<template>
    <div class="popup__wrapper" @mousedown.self="closePopup">
        <div class="popup">
            <slot />
            <TheButton class="popup__close-button" @onClick="closePopup">
                ❌
            </TheButton>
        </div>
    </div>
</template>

<script>
import TheButton from './TheButton.vue';

export default {
    components: {
        TheButton,
    },

    methods: {
        closePopup() {
            this.$store.dispatch('closePopup');
        },
    },
};
</script>

<style lang="scss" scoped>
.popup__wrapper {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(#555, 0.7);
}

.popup {
    position: relative;
    width: 600px;
    padding: 2.5rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0px 8px 16px 8px rgba(34, 60, 80, 0.1);
}

.popup__close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
</style>
