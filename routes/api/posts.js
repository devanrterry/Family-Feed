const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

/*---------- Public Routes ----------*/
router.post('/', postsCtrl.create);
router.get('/', postsCtrl.index);
router.delete('/:id', postsCtrl.delete);
router.put('/:id', postsCtrl.update);




/*---------- Protected Routes ----------*/




module.exports = router;