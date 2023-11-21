import mongoose from 'mongoose'

const ImageModel = new mongoose.Schema({
	myFile: String,
})

export default mongoose.model('Image', ImageModel)
