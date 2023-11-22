import mongoose from 'mongoose'

const imageScheme = new mongoose.Schema({
	myFile: {
		type: String,
		required: true,
	},
})

export default mongoose.model('Image', imageScheme)
