const router = require('express')()

// import validators
const ngoValidator = require('./validators/NgoValidator')
const incidentValidator = require('./validators/IncidentValidator')

// import controllers
const ngoController = require('./controllers/NgoController')
const IncidentController = require('./controllers/IncidentController')

// setup URIs (paths)
router.post('/ngo', ngoValidator.bodyCheck, ngoController.create)
router.get('/ngos', ngoController.index)
router.get('/ngo/:id', ngoValidator.paramCheck, ngoController.show)
router.put('/ngo', ngoValidator.bodyCheck, ngoController.update)
router.delete('/ngo/:id', ngoValidator.paramCheck, ngoController.delete)

router.post('/incident', incidentValidator.bodyCheck, IncidentController.create)
router.get('/incidents', IncidentController.index)
router.get('/incident/:id', incidentValidator.paramCheck, IncidentController.show)
router.put('/incident', incidentValidator.bodyCheck, IncidentController.update)
router.delete('/incident/:id', incidentValidator.paramCheck, IncidentController.delete)

// export router with paths
module.exports = router
