
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = new Schema(
    {
        image: String,
        url: String,
        name: String,
        description: String,
        user: { type: Schema.Types.ObjectId, ref: 'User' }
    }
);

module.exports = model('Article', articleSchema);