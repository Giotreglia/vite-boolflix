<script>
export default {
    name: 'StarsVote',
    props: {
        vote: Number
    }
}
</script>

<template>
    <div>

        <!-- Stelle piene -->
        <span class="stars" v-for="stars in Math.ceil(vote / 2)">
            <i class="fa-solid fa-star"></i>
        </span>

        <!-- Stelle vuote -->
        <span v-for="stars in (5 - Math.ceil(vote / 2))">
            <i class="fa-regular fa-star"></i>
        </span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>