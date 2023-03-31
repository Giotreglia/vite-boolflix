<script>
import { store } from '../store';
export default {
    data() {
        return {
            name: 'MyMain',
            store
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/flags/${img}.svg`, import.meta.url).href;
        }
    },
}
</script>

<template>
    <h3>Film</h3>
    <ul v-if="store.searchMovieResults">
        <li v-for="(movie, i) in store.searchMovieResults" :key="i">{{ movie.title }} / {{ movie.original_title }} / {{
            movie.vote_average }}
            / <img :src="getImagePath(movie.original_language)" :alt="movie.original_language">{{
                movie.original_language }}</li>
    </ul>
    <h3>Serie tv</h3>
    <ul v-if="store.searchSeriesResults">
        <li v-for="(movie, i) in store.searchSeriesResults" :key="i">{{ movie.name }} / {{ movie.original_name }} / {{
            movie.vote_average }}
            / <img :src="getImagePath(movie.original_language)" :alt="movie.original_language">{{
                movie.original_language }}</li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

img {
    width: 30px;
}
</style>