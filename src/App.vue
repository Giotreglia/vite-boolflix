<script>
import axios, { all } from 'axios';
import { store } from './store';
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';
import PopularCarousel from './components/PopularCarousel.vue';
import LandingVideo from './components/LandingVideo.vue';

export default {
  components: {
    MyHeader,
    MyMain,
    PopularCarousel,
    LandingVideo,
  },

  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      axios.get(`https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: this.store.api_key,
            query: this.store.searchText,
            language: "it-IT"
          }
        })
        .then(response => {
          this.store.searchMovieResults = response.data.results;
        })


      axios.get(`https://api.themoviedb.org/3/search/tv`,
        {
          params: {
            api_key: this.store.api_key,
            query: this.store.searchText,
            language: "it-IT"
          }
        })
        .then(response => {
          this.store.searchSeriesResults = response.data.results;
        })

      axios.get(`https://api.themoviedb.org/3/genre/movie/list`,
        {
          params: {
            api_key: this.store.api_key,
            language: "it-IT"
          }
        })
        .then(response => {
          store.genres = response.data.genres;
          console.log(store.genres);
        })
    },
  },
  created() {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=e006ef27465ae9c185e1be8a91b86d0e`)
      .then(response => {
        store.popularMovies = response.data.results;
        console.log(store.popularMovies);
      });
  },
}
</script>

<template>
  <MyHeader @doSearch="search" />
  <LandingVideo />
  <PopularCarousel />
  <MyMain />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
