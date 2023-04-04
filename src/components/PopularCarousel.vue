<script>
import { store } from '../store';
export default {
    name: 'PopularCarousel',
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },
        scrollLeft() {

        }
    }
}
</script>

<template>
    <section id="video">
        <h3>I titoli del momento</h3>

        <div class="carousel-container">
            <div class="carousel-item" v-for="(movie, i) in store.popularMovies" :key="i">
                <img :src="`https://image.tmdb.org/t/p/w1280${movie.poster_path}`" :alt="movie.original_name">
                <div class="carousel-details">
                    <div class="carousel-buttons">
                        <button class="info-btn"><i class="fa-solid fa-circle-info"></i> More Info</button>
                        <button class="play-btn"><i class="fa-solid fa-play"></i> Play</button>
                    </div>
                    <h3 class="details-title">{{ movie.name || movie.title }}</h3>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


.carousel-container {
    display: flex;
    height: 100vh;
    width: 100%;
    overflow-x: auto;
    position: relative;

    .carousel-item {
        position: relative;
    }

    @include scrollbar;

    img {
        display: block;
        object-fit: cover;
        height: 100%;
        margin: 5px;
    }

    .carousel-details {
        position: absolute;
        bottom: 10px;
        right: 20px;
        display: flex;
        flex-direction: column;
        background-color: rgba($color-secondary, 0.5);
        border-radius: 5px;
        align-items: flex-end;
        padding: 20px;

        .details-title {
            font-size: 50px;
            margin: 0;
            cursor: pointer;
            transition: all 0.1s;

            &:hover {
                scale: 1.03;
            }
        }

        .play-btn,
        .info-btn {
            padding: 6px 15px;
            margin-left: 10px;
            font-size: 16px;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.1s;

            &:hover {
                scale: 1.1;
            }
        }

        .info-btn {
            background-color: rgba($color-secondary, 0.5);
            color: white;
        }

        .play-btn {
            background-color: $color-primary;
            color: white;
        }
    }
}
</style>