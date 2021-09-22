const mongoose = require('mongoose')
require('dotenv').config()

const auth = {
	username: process.env.USER,
	password: process.env.PASSWORD
}

// eslint-disable-next-line quotes
const uri = `mongodb+srv://${auth.username}:${auth.password}@bethehero.9qryn.mongodb.net/BeTheHero`

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

module.exports = mongoose
