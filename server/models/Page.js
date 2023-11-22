import mongoose from 'mongoose'

const PageModel = new mongoose.Schema({
	pageUrl: {
		type: String,
		required: true,
		unique: true,
	},
	pageContent: {
		type: String,
		required: true,
	},
})

export default mongoose.model('Page', PageModel)
