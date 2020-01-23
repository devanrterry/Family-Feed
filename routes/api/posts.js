const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const addUserToReq =  require('../../config/auth');

var multer = require('multer');
var cloudinary = require('../../config/cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var storage = cloudinaryStorage({
    cloudinary,
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname );
      },
    allowedFormats: ["jpg", "jpeg", "png"],
});
var upload = multer({storage})

/*---------- Public Routes ----------*/
router.get('/', postsCtrl.index);
router.delete('/:id', postsCtrl.delete);
router.put('/:id', postsCtrl.update);
// router.post('/newpic', upload.single('image'), postsCtrl.addPic)



/*---------- Protected Routes ----------*/
router.use(addUserToReq);
router.post('/', upload.single('image'),postsCtrl.create);



module.exports = router;