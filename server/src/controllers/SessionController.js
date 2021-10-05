const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const NGO = require('../database/models/ngo')

module.exports = {
	async create(req, res) {
		const { email, password } = req.body
		const { errors } = validationResult(req)
		
		if (errors.length) return res.status(422).json(errors)
    
		try {
			NGO.findOne({ email: email}, async (error, ngo) => {
				if (error) return res.status(404).json(error)
				const isSamePwd = await bcrypt.compare(password, ngo.password)
				if (isSamePwd) {
					return res.json ({
						id: ngo.id,
						name: ngo.name,
						email: ngo.email,
						whatsapp: ngo.whatsapp,
						city: ngo.city,
						state: ngo.state,
						incidents: ngo.incidents,
						created_at: ngo.created_at,
						updated_at: ngo.updated_at
					})
				} else {
					return res.status(401).json({ error: 'Invalid password' })
				}
			})
		} catch (error) {
			return res.status(500).json(error)
		}
	}
}
