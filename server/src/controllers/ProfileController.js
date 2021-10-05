const NGO = require('../database/models/ngo')
const Incident = require('../database/models/incident')

module.exports = {
	async index(req, res) {
		const { page = 1 } = req.query
		const limPage = 5
		const { authorization: ngoId } = req.headers
		
		try {
			if (!ngoId) return res.status(404).json(`NGO ID ${ngoId} not found`)

			const count = ((await NGO.findOne({ id: ngoId }))['incidents']).length
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
			return res.status(500).json(error)
		}
	}
}
