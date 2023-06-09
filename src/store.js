import { reactive } from 'vue';

export const store = reactive(
    {
        api_key: 'e006ef27465ae9c185e1be8a91b86d0e',
        searchText: '',
        searchMovieResults: [],
        searchSeriesResults: [],
        popularMovies: [],
        genres: [],
        MovieCast: [],
        SerieCast: [],
        optionSelectedMovie: 'all',
        optionSelectedSerie: 'all',
        filteredMovies: [],
        filteredSeries: []
    }
);