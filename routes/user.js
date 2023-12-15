const express = require('express')
const router = express.Router()
const UserController = require('../controler/user_controler')

router.get('/',UserController.getall)
router.post('/register',UserController.register)
router.post('/login',UserController.login)

module.exports = router;