const express = require('express');
const router = express.Router();


const Article = require('../models/Article.model');
const User = require('../models/User.model');

// POST: create article and add it to user

router.post('/api/articles', (req, res, next) => {
    console.log(req.body);

    const { image, url, name, description, user } = req.body;

    Article.create({ image, url, name, description, user })
        .then((newArticle) => {
            console.log("Created article from database: ", newArticle);
            return User.findByIdAndUpdate(user, { $push: { articles: newArticle._id } })
        })
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.json(error)
        });
});


module.exports = router;