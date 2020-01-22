const User = require('../models/user');
const Post = require('../models/post')

module.exports = {
    create,
    index
}

async function index(req, res) {
    const posts = await Post.find({});
    res.status(200).json(posts);
  }

async function create(req, res) {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  }