<template>
    <div class="user">
        <div class="user__info user__name">
            Name:
            <span> {{ user.name }}</span>
        </div>
        <div class="user__info user__id">
            ID:
            <span>{{ user.id }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState({
        user: (state) => state.user.user,
    }),
};
</script>

<style lang="scss" scoped>
.user__info {
    font-size: 1.2rem;
    font-weight: bold;
    & span {
        font-weight: normal;
    }
}
</style>
