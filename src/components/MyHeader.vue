<script>
import { store } from '../store';
export default {
    name: 'MyHeader',
    emits: ['doSearch'],
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <header>

        <!-- Logo -->
        <div class="header-left">
            <div id="logo-container">
                <a href="#"><img src="../assets/header-logo.png" alt="logo"></a>
            </div>

            <!-- Nav-list -->
            <ul class="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Serie TV</a></li>
                <li><a href="#">Film</a></li>
                <li><a href="#">Originali</a></li>
                <li><a href="#">Aggiunti di recente</a></li>
                <li><a href="#">La mia lista</a></li>
            </ul>
        </div>

        <!-- Search -->
        <div id="search-container">

            <!-- Search input -->
            <input type="text" placeholder="Search" v-model="store.searchText" @keyup.enter="$emit('doSearch')">
            <button @click="$emit('doSearch')"><a href="#cards-container">Search</a></button>

            <!-- User account area -->
            <span id="bell"><i class="fa-solid fa-bell"></i></span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user avatar">
            <span><i class="fa-solid fa-chevron-down"></i></span>
        </div>
    </header>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

header {
    height: 100px;
    background-color: rgba($color-secondary, 0.5);
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 2px 2px 2px rgba($color-secondary, 0.5);

}

.header-left {
    display: flex;
    align-items: center;
    gap: 10px;
}

#search-container {
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;


    input {
        height: 35px;
        width: 100%;
        padding: 5px;
        background-color: lighten($color-secondary, 10);
        border: 0;
        color: white;
        border-radius: 5px;
        font-family: "Bebas Neue", cursive;
    }

    button {
        height: 35px;
        padding: 0 20px;
        background-color: $color-primary;
        border: 0;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        font-family: "Bebas Neue", cursive;

        a {
            color: white;
            text-decoration: none;
        }
    }

    #bell {
        font-size: 22px;
        line-height: 22px;
        cursor: pointer;
    }

    img {
        display: block;
        height: 35px;
        border-radius: 2px;
        cursor: pointer;
    }

    i {
        cursor: pointer;
    }
}

#logo-container {
    position: relative;
    display: flex;
    min-width: 180px;
    align-items: center;
    overflow: hidden;
    padding: 20px;

    img {
        display: block;
        width: 70%;
        cursor: pointer;
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
    font-size: 15px;
    display: none;

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        &:hover {
            text-decoration: underline;
        }
    }
}

@media all and (min-width: 1200px) {
    .nav-list {
        display: flex;
    }
}
</style>