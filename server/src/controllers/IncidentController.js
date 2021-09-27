const { validationResult } = require('express-validator')
const crypto = require('crypto')
const Incident = require('../database/models/incident')
const NGO = require('../database/models/ngo')

module.exports = {
	async create(req, res) {
		const { title, description, value } = req.body
		const authId = req.headers.authorization
    
		if (!authId) return res.status(403).json({
			error: 'you are not logged in'
		})
		
		const id = crypto.randomBytes(4).toString('hex')
		const { errors } = validationResult(req)
    
		if (errors.length) return res.status(422).json(errors)
		
		const incident = await Incident.create({
			id: id,
			title: title,
			description: description,
			value: Number(value)
		})

		NGO.findOneAndUpdate({
			id: authId
		}, {
			$push: {
				incidents: incident
			}
		}, error => {
			if (error) return res.json(error)
		})

		return res.json({ id: incident['id']} )
	}
}
