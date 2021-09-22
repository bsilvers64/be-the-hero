// exports a JSON object with routes' actions
module.exports = {
	async index(req, res) {
		return res.json({
			host: req.hostname
		})
	}
}
