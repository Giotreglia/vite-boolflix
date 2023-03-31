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

  /* https://api.themoviedb.org/3/search/movie?api_key={store.api_key}={} */

  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.api_key}&language=it_IT&query=${store.searchText}`)
        .then(response => {
          store.searchMovieResults = response.data.results;
          console.log(store.searchMovieResults);
        });

      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.api_key}&language=it_IT&query=${store.searchText}`)
        .then(response => {
          store.searchSeriesResults = response.data.results;
          console.log(store.searchSeriesResults);
        })

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
