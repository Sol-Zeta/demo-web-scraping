const router = require('express').Router()
const routes = require('../controllers')


router.get('/getmovie', routes.getData)

module.exports = router