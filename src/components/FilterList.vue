<template>
    <div class="filters">
        <TheButton
            v-for="filter in filters"
            :key="filter"
            class="filter-button"
            :class="{ active: activeFilter === `${filter}` }"
            @onClick="toggleFilter(filter)"
        >
            {{ filter }}
        </TheButton>
    </div>
</template>

<script>
import TheButton from './TheButton.vue';
export default {
    components: { TheButton },
    data() {
        return {
            activeFilter: 'all',
            filters: ['all', 'active', 'overdue'],
        };
    },

    methods: {
        toggleFilter(filter) {
            this.activeFilter = filter;
            this.$emit('toggleFilter', filter);
        },
    },
};
</script>

<style lang="scss" scoped>
.filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.filter-button {
    width: 100%;
}

.active {
    background-color: khaki;
}
</style>
