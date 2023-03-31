<script>
import { store } from '../store';
import MovieCard from './MovieCard.vue';
import SerieCard from './SerieCard.vue';
export default {
    data() {
        return {
            name: 'MyMain',
            store,
        }
    },
    components: {
        MovieCard,
        SerieCard
    }
}
</script>

<template>
    <MovieCard />
    <SerieCard />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>