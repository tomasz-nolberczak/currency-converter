const app = require('express')();
module.exports = { path: '/api', handler: app };

const posts = [
    {
        title: "Post 1",
        content: "Content of post 1"
    },
    {
        title: "Post 2",
        content: "Content of post 2"
    },
    {
        title: "Post 3",
        content: "Content of post 3"
    }
];

app.get('/posts', (req, res) => {
    res.json(posts);
    res.end()
});

app.get('/post/:_id', (req, res) => {
    const post = posts[req.params._id - 1];

    if (post) res.json(post);

    res.redirect('/404');
    res.end()
});

app.post('/post', (req, res) => {
    res.json("Post created!");
    res.end()
});