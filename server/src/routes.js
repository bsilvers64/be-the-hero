const router = require('express')()

// import controllers
const IndexController = require('./controllers/IndexController')

// setup URIs (paths)
router.get('/', IndexController.index)

// export router with paths
module.exports = router
