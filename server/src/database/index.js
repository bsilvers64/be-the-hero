const mongoose = require('mongoose')
require('dotenv').config()

const env = {
	username: process.env.USER,
	password: process.env.PASSWORD,
	db_table: process.env.DB_TABLE
}

// eslint-disable-next-line quotes
mongoose['uri'] = `mongodb+srv://bhavansh:FCroXGU1gxL7AT2Y@bethehero.oldgna8.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', false);
mongoose.connect(mongoose.uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

module.exports = mongoose
