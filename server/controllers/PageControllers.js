import { validationResult } from 'express-validator'
import PageModel from '../models/Page.js'

export const createPage = async (req, res) => {
	try {
		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			return res.status(400).json({ message: errors.array() })
		}

		const { isCheckBox, typePage } = req.body
		console.log('isCheckBox', isCheckBox)
		console.log('typePage,', typePage)

		//const newPage = new PageModel({})

		//await newPage.save()

		res.json(newPage)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to create page',
		})
	}
}

export const updatePage = async (req, res) => {
	try {
		const pageUrl = req.params.url

		await PageModel.findOne(
			{ pageUrl: pageUrl },
			{
				title1: req.body.title1,
				text1: req.body.text1,
				image1: req.body.image1,
				list1: req.body.list1,
				block1: req.body.block1,
				links1: req.body.links1,
				title2: req.body.title2,
				text2: req.body.text2,
				image2: req.body.image2,
				list2: req.body.list2,
				block2: req.body.block2,
				links2: req.body.links2,
				title3: req.body.title3,
				text3: req.body.text3,
				image3: req.body.image3,
				list3: req.body.list3,
				block3: req.body.block3,
				links3: req.body.links3,
				title4: req.body.title4,
				text4: req.body.text4,
				image4: req.body.image4,
				list4: req.body.list4,
				block4: req.body.block4,
				links4: req.body.links4,
			}
		)

		res.status(200).json({
			message: 'Страница успешно обновлена!',
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to update page',
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
