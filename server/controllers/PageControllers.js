import { validationResult } from 'express-validator'
import PageModel from '../models/Page.js'

export const createPage = async (req, res) => {
	try {
		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			return res.status(400).json({ message: errors.array() })
		}

		const {
			typePage,
			URLPage,
			pageTypePublish,
			pageDate,
			pageImage,
			titlePage,
		} = req.body.params
		console.log(req.body.params)
		console.log(typePage)
		console.log(URLPage)
		console.log(pageTypePublish)
		console.log(titlePage)
		const newPage = new PageModel({
			pageUrl: URLPage,
			pageType: typePage,
			pageTypePublish: pageTypePublish,
			pageContent: '',
			pageImage: pageImage,
			pageDate: pageDate,
			pageTitle: titlePage,
		})
		const somedate = await newPage.save()
		console.log(somedate)
		res.json(req.body)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to create page',
		})
	}
}
export const getOurCollegePages = async (req, res) => {
	try {
		const arrPages = await PageModel.find({ pageType: 'own' })
		console.log(arrPages)
		res.send(arrPages)
	} catch (error) {
		console.log(error)
	}
}
export const updatePageAndToPublic = async (req, res) => {
	try {
		const ID = await PageModel.find({ pageUrl: req.body.URLPage })
		const ID_Obj = { _id: ID[0]._id }
		console.log('ID', ID_Obj)

		const update = req.body.textValue
		console.log('update', req.body)
		const doc = await PageModel.findOneAndUpdate(
			{ pageUrl: req.body.URLPage },
			{ pageContent: update, pageTypePublish: true }
		)
		const doc1 = await PageModel.find({ pageUrl: req.body.URLPage })
		console.log(doc1)
		res.status(200).json({
			message: 'Страница успешно опубликована!',
			data: doc1,
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to add page',
		})
	}
}

export const getPage = async (req, res) => {
	try {
		const pageUrl = req.params.url

		const page = await PageModel.findOne({ pageUrl: pageUrl })

		if (!page) {
			return res.status(404).json({
				message: 'Страница не на найдена',
			})
		}

		res.status(200).json(page._doc)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to create page',
		})
	}
}
