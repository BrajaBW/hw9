const express = require('express')
const router = express.Router()
const MovieControler = require ('../controler/movie_controler')
const auth = require('../midleware/auth')

router.get('/',MovieControler.getall)
router.get('/:id',MovieControler.getOne)
router.post('/',auth,MovieControler.create)
router.put('/:id',auth,MovieControler.update)
router.delete('/:id',auth,MovieControler.delete)



module.exports = router