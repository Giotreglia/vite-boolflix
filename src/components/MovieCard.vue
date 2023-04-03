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
            let genere = [];
            this.store.genres.forEach(element => {
                if (movieId == element.id) {
                    genere.push(element.name);
                }

            });
            console.log(genere);

            if (genere.length > 1) {
                return genere[0] + genere[1];
            } else {
                return genere[0];
            }
        }
    }
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
                    <h2>{{ movie.title }}</h2>
                    <h2>{{ movie.original_title }}</h2>
                    <p>{{ genreRecognizer(movie.genre_ids[0]) }}</p>


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