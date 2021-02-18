<template>
    <div class="filters">
        <TheButton
            v-for="filter in filters"
            :key="filter.name"
            class="filter-button"
            :class="{ active: activeFilter === `${filter.name}` }"
            @onClick="toggleFilter(filter.name)"
        >
            {{ filter.title }}
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
            filters: [
                { name: 'all', title: 'Все' },
                { name: 'active', title: 'Активные' },
                { name: 'overdue', title: 'Просроченные' },
            ],
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
