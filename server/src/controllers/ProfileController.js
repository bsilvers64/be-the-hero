const NGO = require('../database/models/ngo')
const Incident = require('../database/models/incident')

module.exports = {
	async index(req, res) {
		const { page = 1 } = req.query
		const limPage = 5
		const ngoId = req.headers['authorization'] || null
		
		try {
			if (!ngoId) return res.json({ error: 'NGO ID was not defined' })

			const count = ((await NGO.findOne({ id: ngoId })).incidents.length) || null

			const incidents = await Incident
				.find({'ngo_owner': (await NGO.find({ id: ngoId}))})
				.populate({
					path: 'ngo_owner',
					select: [
						'id',
						'title',
						'description',
						'value',
						'ngo_owner',
						'created_at',
						'updated_at'
					]
				})
				.limit(limPage)
				.skip((page - 1) * limPage)
				
			res.header('X-Total-Count', count['count(*)'])
			
			return res.status(200).json(incidents)
		} catch (error) {
			return res.json({
				error: error
			})
		}
	}
}
