<template>
    <footer class="border-top py-3">
        <div class="col-12 text-center">
            <ul class="list-inline mb-0">
                <li class="list-inline-item">
                    <NuxtLink to="/">
                        Przelicznik walut
                    </NuxtLink>
                    <NuxtLink to="/list">
                        Przelicznik walut
                    </NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink to="/about">
                        O projekcie
                    </NuxtLink>
                </li>
                <li class="list-inline-item">
                    <NuxtLink to="/author">
                        O autorze
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
    .nuxt-link-exact-active {
        text-decoration: underline;
    }
</style>