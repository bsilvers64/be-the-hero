const { validationResult } = require('express-validator')
const NGO = require('../database/models/ngo')

module.exports = {
	async create(req, res) {
		const { id } = req.body
		const { errors } = validationResult(req)
		
		if (errors.length) return res.status(422).json(errors)
    
		try {
			NGO.findOne({ id: id }, (error, ngo) => {
				if (error) throw error
				return res.json(ngo['name'])
			})
		} catch (error) {
			return res.json({ error: error })
		}
	}
}
