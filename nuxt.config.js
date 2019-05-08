export default  {
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Przelicznik walut napisany w Nuxt.js' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,700' },
        ],
        title: 'Przelicznik walut'
    },
    css: [
        'public/css/bootstrap.min.css',
        'public/css/currencies.min.css',
    ],
    modules: []
};