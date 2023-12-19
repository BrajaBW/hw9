const express = require('express')
const router = express.Router()
const UserController = require('../controler/user_controler')

const multer = require('multer');
const storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, ('./assets/'))
    },
    filename: function (req, file, cb ){
        cb(null, file.originalname);
    }
});
const upload = multer({storage : storage});

router.get('/',UserController.getall)
router.post('/register',upload.single('photo'),UserController.register)
router.post('/login',UserController.login)


module.exports = router;