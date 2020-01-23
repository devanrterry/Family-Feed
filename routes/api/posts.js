const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const addUserToReq =  require('../../config/auth');

/*---------- Public Routes ----------*/
router.get('/', postsCtrl.index);
router.delete('/:id', postsCtrl.delete);
router.put('/:id', postsCtrl.update);




/*---------- Protected Routes ----------*/
router.use(addUserToReq);
router.post('/', postsCtrl.create);



module.exports = router;