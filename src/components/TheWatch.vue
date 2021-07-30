<template>
    <div class="watch">{{ currentTime }}</div>
</template>

<script>
import axios from 'axios';

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

        axios
            .get(`http://localhost:3000/reminders?userId=saVbqGn68f6qsJ2m`)
            .then((res) => res.status * 2)
            .then((res2) =>
                axios.get(`http://localhost:3000/reminders?userId=${res2}`),
            )
            .then((res3) => console.log('res3', res3));
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
