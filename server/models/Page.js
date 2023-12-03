import mongoose from 'mongoose'

const PageModel = new mongoose.Schema({
	pageUrl: {
		type: String,
		required: true,
		unique: true,
	},
	pageType: {
		type: String,
		required: false,
	},
	pageTypePublish: {
		type: Boolean,
		required: true,
	},
	pageContent: {
		type: String,
		required: false,
	},
	pageImage: {
		type: Array,
		required: false,
	},
})

export default mongoose.model('Page', PageModel)
