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
        },
        genreRecognizer(movieId) {
            let genere = [];
            this.store.genres.forEach(element => {
                if (movieId == element.id) {
                    genere.push(element.name);
                }

            });

            return genere[0];

        },
        filterSeriesResults() {
            let results = this.store.searchSeriesResults.filter(x => x.genre_ids[0] === this.store.optionSelectedSerie)
            this.store.filteredSeries = results;
        }
    },
}
</script>

<template>
    <section v-if="store.searchSeriesResults.length > 0">

        <!-- Series Header -->
        <div class="section-header">
            <h3>Serie Tv</h3>
            <select name="generiSeries" id="generiSeries" v-model="store.optionSelectedSerie" @change="filterSeriesResults">
                <option value="all">all</option>
                <option :value="genere.id" v-for="genere in store.genres"> {{ genere.name }}</option>
            </select>
        </div>

        <!-- Series results -->
        <ul id="cards-container" v-if="store.optionSelectedSerie === 'all'">
            <li class="card flip-card" v-for="(movie, i) in store.searchSeriesResults" :key="i">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.original_name">
                    </div>

                    <div class="flip-card-back">
                        <h2>{{ movie.name }}</h2>
                        <h2>{{ movie.original_name }}</h2>

                        <span>Genere:</span>
                        <p>{{ genreRecognizer(movie.genre_ids[0]) }}
                            <span v-if="movie.genre_ids.length > 1">
                                / {{ genreRecognizer(movie.genre_ids[1]) }}
                            </span>
                        </p>

                        <StarsVote :vote="movie.vote_average" />

                        <img class="flag" :src="getImagePath(`flags/${movie.original_language}.svg`)"
                            :alt="movie.original_language">
                        <div>
                            <p>cast:</p>
                            <span class="cast" v-for="cast in store.SerieCast[i]">
                                {{ cast.name }}
                            </span>
                        </div>
                        <p>{{ movie.overview }}</p>
                    </div>
                </div>
            </li>
        </ul>

        <ul id="cards-container" v-else>
            <h1 class="no-result" v-if="store.filteredSeries.length == 0">Nessun risultato</h1>
            <li class="card flip-card" v-for="(movie, i) in store.filteredSeries" :key="i" v-else>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.original_name">
                    </div>

                    <div class="flip-card-back">
                        <h2>{{ movie.name }}</h2>
                        <h2>{{ movie.original_name }}</h2>

                        <span>Genere:</span>
                        <p>{{ genreRecognizer(movie.genre_ids[0]) }}
                            <span v-if="movie.genre_ids.length > 1">
                                / {{ genreRecognizer(movie.genre_ids[1]) }}
                            </span>
                        </p>

                        <StarsVote :vote="movie.vote_average" />

                        <img class="flag" :src="getImagePath(`flags/${movie.original_language}.svg`)"
                            :alt="movie.original_language">
                        <div>
                            <p>cast:</p>
                            <span class="cast" v-for="cast in store.SerieCast[i]">
                                {{ cast.name }}
                            </span>
                        </div>
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