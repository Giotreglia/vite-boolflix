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

        /* Funzione per tradurre il genere in parola dall'id */
        genreRecognizer(movieId) {
            let genere = [];
            this.store.genres.forEach(element => {
                if (movieId == element.id) {
                    genere.push(element.name);
                }

            });

            return genere[0];

        },

        /* Funzione per filtrare i risultati per genere dalla select */
        filterMovieResults() {
            let results = this.store.searchMovieResults.filter(x => x.genre_ids[0] === this.store.optionSelectedMovie)
            this.store.filteredMovies = results;
        }
    }
}


</script>

<template>
    <section v-if="store.searchMovieResults.length > 0">

        <!-- Movies Header -->
        <div class="section-header">
            <h3>Film</h3>
            <select name="generiMovies" id="generiMovies" v-model="store.optionSelectedMovie" @change="filterMovieResults">
                <option value="all">all</option>
                <option :value="genere.id" v-for="genere in store.genres"> {{ genere.name }}</option>
            </select>
        </div>

        <!-- Movies results -->

        <!-- Not filtered results -->
        <ul class="cards-container" v-if="store.optionSelectedMovie === 'all'">

            <!-- Quando non filtrato cicla l'array searchMovieResults -->
            <li class="card flip-card" v-for="(movie, i) in store.searchMovieResults" :key="i">
                <div class="flip-card-inner">
                    <div class="flip-card-front">

                        <!-- Movie Image -->
                        <img src="../assets/immagine-non-disponibile.png" :alt="movie.original_name"
                            v-if="movie.poster_path == null">
                        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.original_name" v-else>

                    </div>
                    <div class="flip-card-back">

                        <!-- Movie Details -->

                        <!-- Title -->
                        <h2>{{ movie.title }}</h2>
                        <h2>{{ movie.original_title }}</h2>

                        <!-- Genre -->
                        <span>Genere:</span>
                        <p>{{ genreRecognizer(movie.genre_ids[0]) }}
                            <span v-if="movie.genre_ids.length > 1">
                                / {{ genreRecognizer(movie.genre_ids[1]) }}
                            </span>
                        </p>

                        <!-- Vote -->
                        <StarsVote :vote="movie.vote_average" />

                        <!-- Language -->
                        <img class="flag" :src="getImagePath(`flags/${movie.original_language}.svg`)"
                            :alt="movie.original_language">

                        <!-- Cast -->
                        <div>
                            <p>cast:</p>
                            <span class="cast" v-for="cast in store.MovieCast[i]">
                                {{ cast.name }}
                            </span>
                        </div>

                        <!-- Description -->
                        <p>{{ movie.overview }}</p>
                    </div>
                </div>
            </li>
        </ul>


        <!-- Filtered results -->
        <ul class="cards-container" v-else>

            <h1 class="no-result" v-if="store.filteredMovies.length == 0">Nessun risultato</h1>

            <!-- Quando filtrato cicla l'array filteredMovies -->
            <li class="card flip-card" v-for="(movie, i) in store.filteredMovies" :key="i" v-else>
                <div class="flip-card-inner">
                    <div class="flip-card-front">

                        <!-- Movie Image -->
                        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.original_name">

                    </div>
                    <div class="flip-card-back">

                        <!-- Movie Details -->

                        <!-- Title -->
                        <h2>{{ movie.title }}</h2>
                        <h2>{{ movie.original_title }}</h2>

                        <!-- Genre -->
                        <span>Genere:</span>
                        <p>{{ genreRecognizer(movie.genre_ids[0]) }}
                            <span v-if="movie.genre_ids.length > 1">
                                / {{ genreRecognizer(movie.genre_ids[1]) }}
                            </span>
                        </p>

                        <!-- Vote -->
                        <StarsVote :vote="movie.vote_average" />

                        <!-- Language -->
                        <img class="flag" :src="getImagePath(`flags/${movie.original_language}.svg`)"
                            :alt="movie.original_language">

                        <!-- Cast -->
                        <div>
                            <p>cast:</p>
                            <span class="cast" v-for="cast in store.MovieCast[i]">
                                {{ cast.name }}
                            </span>
                        </div>

                        <!-- Description -->
                        <p>{{ movie.overview }}</p>
                    </div>
                </div>
            </li>
        </ul>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>