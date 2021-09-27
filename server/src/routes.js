const router = require('express')()
const { body } = require('express-validator')

// import controllers
const ngoController = require('./controllers/NgoController')
const IncidentController = require('./controllers/IncidentController')

// parameter requirements
const ngoBodyParams = [
	body('name')
		.isString()
		.isLength({
			min: 3,
			max: 31
		}),
	body('email')
		.isEmail()
		.isLength({
			max: 31
		}),
	body('password')
		.isString()
		.isLength({
			min: 7, max: 31
		}),
	body('whatsapp')
		.isMobilePhone()
		.isNumeric()
		.isLength({
			max: 15
		}),
	body('city')
		.isString()
		.isLength({
			min: 3,
			max: 31
		}),
	body('state')
		.isString()
		.isAlpha()
		.isLength(2)
]

const incidentBodyParams = [
	body('title')
		.isLength({
			min: 3,
			max: 31
		}),
	body('description')
		.isLength({
			min: 3,
			max: 511
		}),
	body('value')
		.isLength({
			min: 1,
			max: 7
		}).withMessage('Monetary value not allowed')
		.isNumeric()
]

// setup URIs (paths)
router.post('/ngo', ngoBodyParams, ngoController.create)
router.get('/ngos', ngoController.index)
router.get('/ngo/:id', ngoController.show)
router.patch('/ngo', ngoBodyParams, ngoController.update)
router.delete('/ngo/:id', ngoController.delete)

router.post('/incident', incidentBodyParams, IncidentController.create)

// export router with paths
module.exports = router
