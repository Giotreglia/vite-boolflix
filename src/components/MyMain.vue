<script>
import { store } from '../store';
import MovieCard from './MovieCard.vue';
import SerieCard from './SerieCard.vue';
export default {
    name: 'MyMain',
    data() {
        return {
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
    <main>
        <MovieCard />
        <SerieCard />
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

main {
    padding-top: 20px;
}
</style>