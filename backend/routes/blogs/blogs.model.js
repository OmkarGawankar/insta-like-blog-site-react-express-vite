const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const { userSchema } = require('../users/users.model');

const blogSchema = new mongoose.Schema({
    blogId: {
        type: String,
        default: uuidv4(),
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    caption: {
        type: String,
        required: false,
        trim: true,
        maxlength: 1000,
    },
    image: {
        type: String,
        required: false,
        trim: true,
    },
    user: {
        type: userSchema,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
    strict: false,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;