<template>
    <h1 class="text-center mb-5 font-weight-bold">{{text}}</h1>
</template>

<script>
    export default {
        name: "Title",
        props: {
            text: String
        }
    }
</script>