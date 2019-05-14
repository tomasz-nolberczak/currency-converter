const getFiles = require('./helpers/blog');

module.exports =  {
    serverMiddleware: [
        '~/api/Post.js',
    ],
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

    generate: {
        // routes: () => getFiles('blog')
        routes: [
            '/blog/1',
            '/blog/2',
            '/blog/3',
        ]
    },

    // build: {
    //     /*
    //     ** You can extend webpack config here
    //     */
    //     extend(config, ctx) {
    //         config.module.rules.push({
    //             test: /\.md$/,
    //             use: ['raw-loader']
    //         })
    //     }
    // }
};