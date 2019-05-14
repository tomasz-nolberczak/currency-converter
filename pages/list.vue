<template>
    <section>
        <ul>
            <li v-for="post in posts">
                {{post.title}}
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        layout: 'main',
        transition: 'fade',
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            const self = this;

            fetch('/api/posts').then((response) => response.json()).then((posts) => {
                self.posts = posts;
                console.log(posts)
            });
        }
    }
</script>