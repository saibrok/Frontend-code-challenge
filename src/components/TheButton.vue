<template>
    <button :type="type" class="button" :disabled="disabled" @click="onClick">
        <slot>
            <span>OK</span>
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        disabled: Boolean,
        type: {
            type: String,
            default: 'button',
        },
    },

    methods: {
        onClick() {
            this.$emit('onClick');
        },
    },
};
</script>

<style lang="scss" scoped>
.button {
    min-width: 3rem;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;

    &:disabled {
        cursor: inherit;
    }
}
</style>
