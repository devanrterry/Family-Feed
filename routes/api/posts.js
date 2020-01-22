const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

/*---------- Public Routes ----------*/
router.post('/posts', postsCtrl.create);




/*---------- Protected Routes ----------*/




module.exports = router;