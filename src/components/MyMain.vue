<script>
import { store } from '../store';
export default {
    data() {
        return {
            name: 'MyMain',
            store
        }
    },
}
</script>

<template>
    <ul v-if="store.searchResults">
        <li v-for="(movie, i) in store.searchResults" :key="i">{{ movie.title }} / {{ movie.original_title }} / {{
            movie.vote_average }}
            / {{ movie.original_language }}</li>
    </ul>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>