<script>
export default {
    name: 'MyHeader'
}
</script>

<template>
    <header>
        <div id="logo-container">
            <h1 id="logo">Boolflix</h1>
        </div>

        <div id="search-container">
            <input type="text" placeholder="Search">
            <button>Search</button>
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
</style>