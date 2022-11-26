const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const userSchema = new Schema(

  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    name: {
      type: String,
      required: true
    },
    articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
  }

);


module.exports = model('User', userSchema);
