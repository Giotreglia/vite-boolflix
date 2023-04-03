<script>
import axios from 'axios';
import { store } from './store';
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';

export default {
  components: {
    MyHeader,
    MyMain,
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

      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.store.api_key}&language=it-IT`)
        .then(response => {
          store.genres = response.data.genres;
          console.log(store.genres);
        });
    }
  },
}
</script>

<template>
  <MyHeader @doSearch="search" />

  <MyMain />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
