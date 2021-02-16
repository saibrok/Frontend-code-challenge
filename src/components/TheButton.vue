<template>
    <button type="button" class="button" @click="onClick">
        <slot>
            <span>OK</span>
        </slot>
    </button>
</template>

<script>
export default {
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
    padding: 1rem 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
}
</style>
