<template>
    <div id="about" class="text-center">
        <Title text="O autorze"></Title>
        <p>
            Autorem tej aplikacji jest Tomasz Nolberczak - developer z pięcioletnim doświadczeniem.
        </p>
    </div>
</template>

<script>
    import Title from './../components/title';

    export default {
        head: {
            title: "O autorze"
        },
        transition: 'fade',
        layout: 'main',
        components: {Title}
    }
</script>
