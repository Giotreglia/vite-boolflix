<script>
import { store } from '../store';
export default {
    data() {
        return {
            name: 'SerieCard',
            store
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },

        starsShower() {
            return Math.floor(movie.vote_average / 2) + 1;
        }
    },
}
</script>

<template>
    <h3>Serie tv</h3>
    <ul v-if="store.searchSeriesResults">
        <li v-for="(movie, i) in store.searchSeriesResults" :key="i">
            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.original_name">
            {{ movie.name }} /
            {{ movie.original_name }} /
            <span class="stars" v-for="stars in Math.floor(movie.vote_average / 2) + 1">
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-for="stars in (5 - (Math.floor(movie.vote_average / 2) + 1))">
                <i class="fa-regular fa-star"></i>
            </span>
            /
            <img class="flag" :src="getImagePath(`flags/${movie.original_language}.svg`)" :alt="movie.original_language">
            {{ movie.original_language }}
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>