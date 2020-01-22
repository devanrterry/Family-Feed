const User = require('../models/user');

module.exports = {
    create
}

async function create(req, res) {
    const post = await Post.create(req.body);
    res.status(201).json(puppy);
  }