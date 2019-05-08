<template>
    <div class="currency mb-2 py-3 pl-5 border-bottom">
        <i class="currency-flag" :class="'currency-flag-' + name.toLowerCase()"></i>
        Wartość: {{(value * amount).toFixed(2)}} {{name}}
    </div>
</template>

<script>
    export default {
        name: "Currency",
        props: {
            name: String,
            value: Number,
            amount: Number,
            currency: String
        },
    }
</script>

<style lang="scss">
    .currency {
        position: relative;
    }

    i {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>