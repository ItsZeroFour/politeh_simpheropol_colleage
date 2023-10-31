import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
import router from './routes/UserRoutes.js'

dotenv.config({ path: './.env' })

const app = express()

/* CONSTANTS */
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

/* MIDDLEWARES */
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/uploads', express.static('uploads'))

/* ROUTES */
app.use('/auth', router)
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
