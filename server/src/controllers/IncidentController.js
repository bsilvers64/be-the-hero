const { validationResult } = require('express-validator')
const crypto = require('crypto')
const Incident = require('../database/models/incident')
const NGO = require('../database/models/ngo')
const incident = require('../database/models/incident')

module.exports = {
	async create(req, res) {
		const { title, description, value } = req.body
		const authId = req.headers.authorization

		if (!authId) return res.status(403).json({
			error: 'you are not logged in'
		})
		
		if (!(await NGO.find({ id: authId })).length) {
			return res.status(404).json({
				error: `NGO with id ${authId} not found`
			})
		}
		
		const id = crypto.randomBytes(4).toString('hex')
		const { errors } = validationResult(req)
		
		if (errors.length) return res.status(422).json(errors)
		
		const incident = await Incident.create({
			id: id,
			title: title,
			description: description,
			value: Number(value),
			ngo_owner: await NGO.findOne({ id: authId })
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
