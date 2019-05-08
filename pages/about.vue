<template>
    <div id="about" class="text-center">
        <Title text="O projekcie"></Title>
        <p>
            Przelicznik walut został napisany w kilka godzin. Projekt służy nauce technologii Nuxt.js - biblioteki, dzięki której staje się możliwe renderowanie aplikacji napisanej w VueJS.
        </p>
        <p>
            Aplikacja pobiera dane z serwisu <a href="//exchangeratesapi.io" target="_blank">exchangeratesapi.io</a>. Dane o walutach są cache'owane przez godzinę od ostatniego requesta, aby uniknąć dublowania niepotrzebnych zapytań do API.
        </p>
    </div>
</template>

<script>
    import Title from './../components/title';

    export default {
        head: {
          title: "O projekcie"
        },
        transition: 'fade',
        layout: 'main',
        components: {Title}
    }
</script>