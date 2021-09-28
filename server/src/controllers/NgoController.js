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
	},

	async index(req, res) {
		const errors = validationResult(req)['errors']
		if (errors.length) return res.status(422).json(errors)

		NGO.find({}, (error, ngos) => {
			if (error) return res.json(error)
			return res.json(ngos)
		})
	},

	async show(req, res) {
		const errors = validationResult(req)['errors']

		console.log(validationResult(req))
		console.log(errors)
		
		if (errors.length) return res.status(422).json(errors)

		const id = req.params.id
		
		NGO.findOne({ id: id }, (error, ngo) => {
			if (error) return res.json(error)
			return res.json(ngo)
		})
	},

	async update(req, res) {
		const errors = validationResult(req)['errors']
		if (errors.length) return res.status(422).json(errors)
		
		let { password } = req.body
		const { id, name, email, whatsapp, city, state } = req.body
		const currentHashedPassword = (await NGO.findOne({ id: id }))['password']

		if (!currentHashedPassword) return res.status(404).json({
			error: `NGO '${name}' not found`
		})
		
		const isSamePassword = bcrypt.compareSync(password, currentHashedPassword)
		
		if (isSamePassword) {
			password = currentHashedPassword
		} else {
			password = bcrypt.hashSync(password, 10)
		}

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
		}, (error, updated) => {
			if (error) return res.json(error)
			return res.json(updated)
		})
	},

	async delete(req, res) {
		const errors = validationResult(req)['errors']
		if (errors.length) return res.status(422).json(errors)

		const { id } = req.params
		const authId = req.headers.authorization

		const ngo = await NGO.findOne({ id: id })

		if (!ngo) return res.status(404).json({ error: `NGO with id '${id}' not found` })

		if ((id !== authId) || (ngo.id !== authId)) return res.status(401).json({
			error: 'Unauthorized'
		})

		NGO.deleteOne({ id: ngo.id }, error => {
			if (error) return res.json(error)
		})
    
		return res.status(410).json({ id: id })
	}
}
