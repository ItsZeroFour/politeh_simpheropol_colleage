import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
import multer from 'multer'
import path from 'path'
import Image from './models/Image.js'
import dormitoryRouter from './routes/DormitoryRoutes.js'
import pageRouter from './routes/PageRoutes.js'
import postRouter from './routes/PostRoutes.js'
import specialityRouter from './routes/SpecialtiesRoutes.js'
import userRouter from './routes/UserRoutes.js'

dotenv.config({ path: './.env' })
const app = express()

/* CONSTANTS */
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI
// const upload = multer({ dest: 'uploads/' })
/* MIDDLEWARES */

app.use(express.json({ limit: '50mb' }))
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json({ limit: '200mb' }))
app.use(
	bodyParser.urlencoded({
		limit: '200mb',
		extended: true,
		parameterLimit: 1000000,
	})
)

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/') // Uploads will be stored in the 'uploads' directory
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname))
	},
})

const upload = multer({ storage: storage })

// Serve the HTML page with a form for image upload
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

// Handle image upload
app.post('/upload', upload.single('image'), async (req, res) => {
	try {
		if (req.file) {
			const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`
			console.log(imageUrl)

			// Save image details to MongoDB

			const newImage = new Image({
				filename: req.file.filename,
				path: imageUrl,
			})

			await newImage.save()

			res.json({ imagelink: imageUrl }) // Only return the image URL
		} else {
			res.status(400).send('No image file provided')
		}
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
})

// Set up static file serving for uploaded images
app.use('/uploads', express.static('uploads'))
/* ROUTES */
app.use('/auth', userRouter)
app.use('/speciality', specialityRouter)
app.use('/post', postRouter)
app.use('/dormitory', dormitoryRouter)
app.use('/page', pageRouter)
// app.post('/upload', upload.single('image'), async (req, res) => {
// 	try {
// 		console.log(req.data)
// 		console.log(req.file)
// 		console.log(req.body.file)
// 		console.log(req.query)
// 		if (req.file) {
// 			const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`
// 			console.log(imageUrl)

// 			// Save image details to MongoDB
// 			const newImage = new Image({
// 				filename: req.file.filename,
// 				path: imageUrl,
// 			})

// 			await newImage.save()

// 			res.json({ imagelink: imageUrl }) // Only return the image URL
// 		} else {
// 			res.status(400).send('No image file provided')
// 		}
// 	} catch (error) {
// 		console.error(error)
// 		res.status(500).send('Internal Server Error')
// 	}
// })

// Set up static file serving for uploaded images

// app.get('/images', async (req, res) => {
// 	try {
// 		const posts = await Image.find()
// 		console.log(posts)
// 		res.json(posts)
// 	} catch (error) {
// 		res.send(error)
// 	}
// })
// app.post('/addpage', async (req, res) => {
// 	try {
// 		const pageUrl = req.query.publishLink
// 		const pageContent = req.query.textValue
// 		const pagewithDB = await Page.findOne({ pageUrl })
// 		console.log('PAGEWITHDB', pagewithDB)
// 		if (!pagewithDB) {
// 			const page = new PageModel({
// 				pageUrl: pageUrl,
// 				pageContent: pageContent,
// 			})
// 			page.save()
// 			res.status(200).json(page)
// 		} else {
// 			console.log("{ message: 'такой URL уже существует' }")
// 			return res.status(208).json({ message: 'такой URL уже существует' })
// 		}
// 	} catch (error) {
// 		console.log(error)
// 	}
// })
/* START FUNCTION */
async function start() {
	try {
		await mongoose
			.connect(MONGO_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log('Mongo db connected successfully'))
			.catch(err => console.log(err))

		app.listen(PORT, err => {
			if (err) return console.log('App crashed: ', err)
			console.log(`Server started successfully! Port: ${PORT}`)
		})
	} catch (err) {
		console.log(err)
	}
}

start()
