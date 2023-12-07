import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
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
//app.use('/uploads', express.static('uploads'))

/* ROUTES */
app.use('/auth', userRouter)
app.use('/speciality', specialityRouter)
app.use('/post', postRouter)
app.use('/dormitory', dormitoryRouter)
app.use('/page', pageRouter)
// app.post('/uploads', async (req, res) => {
// 	const body = req.body
// 	try {
// 		const newImage = await Image.create(body)
// 		newImage.save()
// 		res.status(201).json({ msg: 'New image uploaded...!' })
// 	} catch (error) {
// 		res.status(409).json({ message: error.message })
// 	}
// })
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
