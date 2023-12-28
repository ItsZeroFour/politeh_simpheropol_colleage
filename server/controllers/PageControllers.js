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
		const arrPages = await PageModel.find()
		console.log(arrPages)
		res.send(arrPages)
	} catch (error) {
		console.log(error)
	}
}
export const getOurPostsPages = async (req, res) => {
	try {
		const arrPages = await PageModel.find({
			pageType: 'post',
			pageTypePublish: true,
		})
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
		console.log('update', req.body.titlePage)
		const doc = await PageModel.findOneAndUpdate(
			{ pageUrl: req.body.URLPage },
			{
				pageContent: update,
				pageTypePublish: true,
				pageTitle: req.body.titlePage,
			}
		)

		const doc1 = await PageModel.find({ pageUrl: req.body.URLPage })
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
export const getPageContent = async (req, res) => {
	try {
		const pagesDate = req.query.postId
		console.log(pagesDate)
		const page = await PageModel.findOne({ pageUrl: pagesDate })
		console.log(page.pageContent)
		res.json({ pageContent: page.pageContent })
	} catch (error) {
		console.log(error)
	}
}
export const getPagePostsTitle = async (req, res) => {
	try {
		const pagesDate = req.query
		console.log(pagesDate)
		const pages = await PageModel.find({ pageType: pagesDate.typePage })
		const newArr = []
		pages.forEach(item => {
			const {
				pageTypePublish,
				pageUrl,
				pageTitle,
				pageDate,
				pageImage,
				pageType,
			} = item
			newArr.push({
				pageUrl,
				pageTitle,
				pageDate,
				pageImage,
				pageTypePublish,
				pageType,
			})
		})

		console.log(newArr)
		res.json(newArr)
	} catch (error) {
		console.log(error)
		res.send(error)
	}
}

export const getPageUrl = async (req, res) => {
	try {
		const pageUrl = req.query.urlPage
		console.log(pageUrl)
		const page = await PageModel.findOne({ pageUrl: pageUrl })
		console.log(page)
		if (page == null) {
			return res.status(404).json(page._doc)
		} else {
			return res.status(200).json(page._doc)
		}
	} catch (err) {
		console.log(err)
		return res.status(404).json({
			message: 'Страница не на найдена',
		})
	}
}
