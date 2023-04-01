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

/* .rounded {
    position: absolute;
    bottom: 15px;
    left: 0;
    border-radius: 50%;
    width: 105%;
    background-color: $color-secondary;
    height: 12px;

} */

#logo {
    transform-origin: bottom;
    transform: rotate(-6deg);
}
</style>