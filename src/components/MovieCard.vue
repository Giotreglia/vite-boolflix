<script>
import { store } from '../store';
import StarsVote from './StarsVote.vue';
export default {
    name: 'MovieCard',
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
        },
        genreRecognizer(movieId) {
            let genere = '';
            this.store.genres.forEach((element, i) => {
                if (movieId == element.id) {
                    genere = element.name
                }
                console.log(genere);
                return genere;
            });
        }
    },
}
</script>

<template>
    <h3>Film</h3>
    <ul class="cards-container" v-if="store.searchMovieResults">
        <li class="card flip-card" v-for="(movie, i) in store.searchMovieResults" :key="i">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.original_name">
                </div>
                <div class="flip-card-back">
                    {{ movie.title }} /
                    {{ movie.original_title }} /
                    {{ genreRecognizer(movie.genre_ids[0]) }}

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