module.exports = {
	isAuthenticated: (req, res, next) => {
		// this authentication verification must be updated
		// console.log('trying to authenticate')
		// console.log(req.session)
		if (true) {
			return next()
		} else {
			return res.status(401).json({ error: 'Unauthenticated' })
		}
	}
}
