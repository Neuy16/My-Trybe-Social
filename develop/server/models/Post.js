const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const PostSchema = new Schema(
  {
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

const post = model('Post', postSchema);

module.exports = Post;