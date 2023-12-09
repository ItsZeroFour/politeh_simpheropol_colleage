import mongoose from 'mongoose'

const ImageModel = new mongoose.Schema({
	myFile: {
		type: String,
		required: true,
	},
})

export default mongoose.model('Image', ImageModel)
