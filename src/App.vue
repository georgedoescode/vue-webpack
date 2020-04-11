<script>
    export default {
        name: 'App',
    };
</script>

<template>
    <main>
        <img src="./assets/img/vue_logo.svg" alt="b" />
        <h1>Vue Weback Boilerplate</h1>
    </main>
</template>

<style scoped>
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        font-family: 'Avenir', system-ui;
    }

    img {
        max-width: 20rem;
    }

    h1 {
        margin-top: 2rem;
        text-align: center;
    }
</style>
