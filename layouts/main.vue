<template>
    <main id="application">
        <section class="container py-5 my-5">
            <Nuxt />
        </section>
        <Footer></Footer>
    </main>
</template>

<script>
    import Footer from './../components/footer';

    export default {
        components: {Footer}
    }
</script>

<style lang="scss">
    @import './../public/css/bootstrap.min.css';
    @import './../public/css/currencies.min.css';

    html * {
        font-family: 'Work Sans', sans-serif;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>