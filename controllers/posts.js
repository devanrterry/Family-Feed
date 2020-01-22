const User = require('../models/user');
const Post = require('../models/post')

module.exports = {
    create,
    index,
    delete: deleteOne
}

async function deleteOne(req, res) {
    const deletedPost = await Post.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPost);
  }

async function index(req, res) {
    const posts = await Post.find({});
    res.status(200).json(posts);
  }

async function create(req, res) {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  }