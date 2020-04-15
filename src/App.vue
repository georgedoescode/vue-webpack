<script>
    import HelloWorld from './components/HelloWorld.vue';

    export default {
        name: 'App',
        components: {
            HelloWorld,
        },
    };
</script>

<template>
    <main>
        <HelloWorld />
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
</style>
