<template>
    <div class="watch">{{ currentTime }}</div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: new Date().toLocaleString(),
        };
    },

    mounted() {
        setInterval(() => {
            this.currentTime = new Date().toLocaleString();
        }, 1000);
    },
};
</script>

<style lang="scss" scoped>
.watch {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
</style>
