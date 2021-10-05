const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const NGO = require('../database/models/ngo')
const Incident = require('../database/models/incident')

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

		try {
			NGO.create(ngo, (error, ngo) => {
				if (error) return res.status(400).json(error)
				return res.status(201).json(ngo)
			})
		} catch (error) {
			return res.json({ error: error })
		}
	},

	async index(req, res) {
		const errors = validationResult(req)['errors']
		if (errors.length) return res.status(422).json(errors)

		try {
			NGO.find({}, (error, ngos) => {
				if (error) return res.status(406).json(error)
				return res.json(ngos)
			})
		} catch (error) {
			return res.json({ error: error })
		}
	},

	async show(req, res) {
		const errors = validationResult(req)['errors']
		
		if (errors.length) return res.status(422).json(errors)

		const id = req.params.id
		
		try {
			NGO.findOne({ id: id }, (error, ngo) => {
				if (error) return res.status(404).json(error)
				return res.json(ngo)
			})
		} catch (error) {
			return res.json({ error: error })
		}
	},

	async update(req, res) {
		const errors = validationResult(req)['errors']
		if (errors.length) return res.status(422).json(errors)
		
		let { password } = req.body
		let currentHashedPassword = null
		const { id, name, email, whatsapp, city, state } = req.body

		try {
			NGO.findOne({ id: id }, error => {
				if (error) return res.status(404).json(error)
			})
		} catch (error) {
			return res.json(error)
		}

		try {
			currentHashedPassword = (await NGO.findOne({ id: id }))['password']
		} catch (error) {
			return res.json({ error: error})
		}
		
		if (!currentHashedPassword) return res.status(404).json({
			error: `NGO '${name}' not found`
		})
		
		const isSamePassword = bcrypt.compareSync(password, currentHashedPassword)
		
		if (isSamePassword) {
			password = currentHashedPassword
		} else {
			password = bcrypt.hashSync(password, 10)
		}

		try {
			NGO.findOneAndUpdate({
				id: id
			}, {
				name: name,
				email: email,
				password: password,
				whatsapp: whatsapp,
				city: city,
				state: state,
				created_at: (await NGO.findOne({ id: id }))['created_at'],
				updated_at: Date.now()
			}, error => {
				if (error) return res.status(406).json(error)
				return res.json({ updated: true })
			})
		} catch (error) {
			return res.json({ error: error })
		}
	},

	async delete(req, res) {
		const errors = validationResult(req)['errors']
		if (errors.length) return res.status(422).json(errors)

		const { id } = req.params
		const authId = req.headers.authorization

		// check whether if the given NGO exists
		try {
			const ngo = await NGO.findOne({ id: id }) || null
			if (!ngo) return res.status(404).json(`NGO with ID '${id}' not found`)
			if ((id !== authId) || (ngo.id !== authId)) return res.status(401).json('Unauthorized')
		} catch (error) {
			return res.json({
				error: error
			})
		}
		
		// delete NGO incidents
		try {
			Incident.deleteMany({
				ngo_owner: (await NGO.findOne({ id: id }))
			}, error => {
				if (error) return res.status(404).json(error)
			})
		} catch (error) {
			return res.json({
				error: error
			})
		}

		// delete NGO
		try {
			NGO.deleteOne({ id: id }, error => {
				if (error) return res.status(404).json(error)
				return res.json({ deleted: true })
			})
		} catch (error) {
			return res.json({ error: error })
		}
	}
}
