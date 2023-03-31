<script>
import { store } from '../store';
export default {
    name: 'MyHeader',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <header>
        <div id="logo-container">
            <h1 id="logo">Boolflix</h1>
        </div>

        <div id="search-container">
            <input type="text" placeholder="Search" v-model="store.searchText">
            <button @click="$emit('doSearch')">Search</button>
        </div>
    </header>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

header {
    height: 100px;
    background-color: $color-secondary;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
}

#logo {
    color: $color-primary;
    font-size: 60px;
}

#search-container {
    display: flex;
    align-items: center;

    input {
        height: 30px;
        padding: 5px;
        background-color: $color-secondary;
        color: white;
        border: solid 1px white;
    }

    button {
        height: 30px;
        padding: 5px 20px;
        margin-left: 10px;
        background-color: $color-primary;
        color: white;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
    }
}
</style>