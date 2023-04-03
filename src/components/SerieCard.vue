<script>
import { store } from '../store';
import StarsVote from './StarsVote.vue';
export default {
    name: 'SerieCard',
    components: {
        StarsVote
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
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

                    <StarsVote :vote="movie.vote_average" />

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