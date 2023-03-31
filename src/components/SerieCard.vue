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
    <ul class="cards-container" v-if="store.searchSeriesResults">
        <li class="card flip-card" v-for="(movie, i) in store.searchSeriesResults" :key="i">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.original_name">
                </div>

                <div class="flip-card-back">
                    {{ movie.name }} /
                    {{ movie.original_name }} /
                    <div>
                        <span class="stars" v-for="stars in Math.floor(movie.vote_average / 2) + 1">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-for="stars in (5 - (Math.floor(movie.vote_average / 2) + 1))">
                            <i class="fa-regular fa-star"></i>
                        </span>
                    </div>

                    <img class="flag" :src="getImagePath(`flags/${movie.original_language}.svg`)"
                        :alt="movie.original_language">
                    <p>{{ movie.overview }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>