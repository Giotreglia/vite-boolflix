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
            <img src="../assets/header-logo.png" alt="logo">
        </div>
        <ul class="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Serie TV</a></li>
            <li><a href="#">Film</a></li>
            <li><a href="#">Originali</a></li>
            <li><a href="#">Aggiunti di recente</a></li>
            <li><a href="#">La mia lista</a></li>
        </ul>
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
        height: 35px;
        width: 200px;
        padding: 5px;
        background-color: $color-secondary;
        color: white;
        border: solid 1px white;
        font-family: "Bebas Neue", cursive;
    }

    button {
        height: 35px;
        padding: 0 20px;
        margin-left: 10px;
        background-color: $color-primary;
        color: white;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        font-family: "Bebas Neue", cursive;
    }
}

#logo-container {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 20px;

    img {
        display: block;
        height: 50px;
        width: 190px;
    }
}

#logo {
    transform-origin: bottom;
    transform: rotate(-6deg);
}

.nav-list {
    display: flex;
    list-style: none;
    color: white;
    gap: 30px;
    font-size: 20px;

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>