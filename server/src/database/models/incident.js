const mongoose = require('../index')

const incidentSchema = new mongoose.Schema({
	id: {
		type: String,
		index: true,
		unique: true,
		immutable: true
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	value: {
		type: Number,
		required: true,
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
})

// maps the database, transform into an object and exports it
module.exports = mongoose.model('Incident', incidentSchema)
