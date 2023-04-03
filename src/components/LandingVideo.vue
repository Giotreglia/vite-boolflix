<script>
import { store } from '../store';
export default {
    name: 'LandingVideo',
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section id="video">
        <div class="video-container">
            <video autoplay loop>
                <source src="../assets/video4.mp4" type="video/mp4">
            </video>
            <div class="video-details">
                <div class="video-buttons">
                    <button class="info-btn"><i class="fa-solid fa-circle-info"></i> More Info</button>
                    <button class="play-btn"><i class="fa-solid fa-play"></i> Play</button>
                </div>
                <h3 class="details-title">vue - a boolean movie</h3>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


.video-container {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    video {
        width: 100%;
    }

    @include scrollbar;

    img {
        display: block;
        object-fit: cover;
        height: 100%;
        margin: 5px;
    }

    .video-details {
        position: absolute;
        bottom: 150px;
        left: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 20px;

        .details-title {
            font-size: 120px;
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
            font-size: 20px;
            border: 0;
            border-radius: 5px;
            font-weight: bold;
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