const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const postSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },

    content: {
        type: String,
        required: "You need to leave a post!",
        minlength: 1,
        maxlength: 300, 
        trim: true
    },
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Post = model('Post', postSchema);

module.exports = Post;