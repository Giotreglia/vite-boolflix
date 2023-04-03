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
        <span class="stars" v-for="stars in Math.floor(vote / 2) + 1">
            <i class="fa-solid fa-star"></i>
        </span>
        <span v-for="stars in (5 - (Math.floor(vote / 2) + 1))">
            <i class="fa-regular fa-star"></i>
        </span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>