const { body } = require('express-validator')

module.exports = {
	bodyCheck: [
		body('id')
			.isLength({
				min: 8,
				max: 8
			})
			.withMessage('NGO ID invalid')
	]
}
