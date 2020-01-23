const User = require('../models/user');
const Post = require('../models/post')

module.exports = {
    create,
    index,
    delete: deleteOne,
    update
}

async function update(req, res) {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedPost);
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
    console.log(req.user)
    req.body.user = req.user.name;
    const post = await Post.create(req.body);
    res.status(201).json(post);
  }