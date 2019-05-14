<template>
    <article>
        <h1>{{title}}</h1>
        <div v-html="content"></div>
    </article>
</template>

<script>
    export default {
        name: "Post",
        layout: 'main',
        async asyncData ({params}) {
            const fileContent = await fetch(`/api/post/${params.title}`).then((res) => res.json());

            return {
                title: res.attributes.title,
                content: fileContent
            }
        }
    }
</script>