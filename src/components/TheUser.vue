<template>
    <div class="user">
        <div class="user__info user__name">
            Name:
            <span>Simple Name</span>
        </div>
        <div class="user__info user__id">
            ID:
            <span>9dfg45-gds5f4g-sdfg549dfs-gsd</span>
        </div>
    </div>
</template>

<script>
export default {};
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
