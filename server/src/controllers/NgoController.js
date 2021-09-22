const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const NGO = require('../database/models/ngo')

module.exports = {
	async create(req, res) {
		const errors = validationResult(req)['errors']
		if (errors.length) return res.status(422).json(errors)
		
		const { name, email, password, whatsapp, city, state } = req.body
		const id = crypto.randomBytes(4).toString('hex')
		const hashedPassword = bcrypt.hashSync(password, 10)

		const ngo = {
			id: id,
			name: name,
			email: email,
			password: hashedPassword,
			whatsapp: whatsapp,
			city: city,
			state: state
		}

		NGO.create(ngo, (error, ngo) => {
			if (error) return res.json(error)
			return res.status(201).json(ngo)
		})
	}
}
