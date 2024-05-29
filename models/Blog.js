const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchmea = new Schema({
    name: String,
    text: String,
    dateCreted: {
        type: Date,
        default: Date.now
    }
});
const Blog = mongoose.model('Blog', blogSchmea);

module.exports = Blog;
