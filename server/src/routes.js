const router = require('express')()

// import validators
const ngoValidator = require('./validators/NgoValidator')
const incidentValidator = require('./validators/IncidentValidator')
const sessionValidator = require('./validators/SessionValidator')

// import controllers
const NgoController = require('./controllers/NgoController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// setup URIs (paths)
router.post('/ngo', ngoValidator.bodyCheck, NgoController.create)
router.get('/ngos', NgoController.index)
router.get('/ngo/:id', ngoValidator.paramCheck, NgoController.show)
router.put('/ngo', ngoValidator.bodyCheck, NgoController.update)
router.delete('/ngo/:id', ngoValidator.paramCheck, NgoController.delete)

router.post('/incident', incidentValidator.bodyCheck, IncidentController.create)
router.get('/incidents', IncidentController.index)
router.get('/incident/:id', incidentValidator.paramCheck, IncidentController.show)
router.put('/incident', incidentValidator.bodyCheck, IncidentController.update)
router.delete('/incident/:id', incidentValidator.paramCheck, IncidentController.delete)

router.get('/profile', ProfileController.index)
router.post('/session', sessionValidator.bodyCheck, SessionController.create)

// export router with paths
module.exports = router
