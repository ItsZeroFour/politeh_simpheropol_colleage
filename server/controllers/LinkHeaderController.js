import LinkSchema from '../models/LinkSchema.js'
import NestingLinkSchema from '../models/NestingLinkSchema.js'
export const LinkGet = async (req, res) => {}
export const LinkGetAll = async (req, res) => {}
// export const LinkCreate = async (req, res) => {
// 	try {
// 		const { url, text, isCategory, links } = req.body
// 		console.log(url)
// 		const Link = new LinkSchema({
// 			url,
// 			text,
// 			isCategory,
// 		})
// 		await Link.save()
// 		console.log(Link._id)
// 		if (links.length !== 0) {
// 			for (const link of links) {
// 				const nestingLink = new NestingLinkSchema({
// 					url: link.url,
// 					text: link.text,
// 					linkId: Link._id,
// 				})
// 				await nestingLink.save()
// 			}
// 		}

// 		res.status(200).json({ message: 'создан новый раздел' })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).json({ message: 'ошибка сервера' })
// 	}
// }
export const LinkCreate = async (req, res) => {
	try {
		const { url, text, isCategory, links } = req.body

		// Проверяем наличие дубликатов url в LinkSchema
		const existingLink = await LinkSchema.findOne({ url })
		if (existingLink) {
			return res
				.status(400)
				.json({ message: 'URL уже существует в LinkSchema' })
		}

		// Создаем новый документ Link
		const newLink = new LinkSchema({
			url,
			text,
			isCategory,
		})

		// Пытаемся сохранить новый документ Link
		await newLink.save()

		// Если есть связанные документы NestingLink, создаем их
		if (links.length !== 0) {
			for (const link of links) {
				// Проверяем наличие дубликатов url в NestingLinkSchema
				const existingNestedLink = await NestingLinkSchema.findOne({
					url: link.url,
				})
				if (existingNestedLink) {
					return res
						.status(400)
						.json({ message: 'URL уже существует в NestingLinkSchema' })
				}

				const nestingLink = new NestingLinkSchema({
					url: link.url,
					text: link.text,
					linkId: newLink._id,
				})
				await nestingLink.save()
			}
		}

		res.status(200).json({ message: 'Создан новый раздел' })
	} catch (error) {
		// Обработка ошибки
		console.error(error)
		res.status(500).json({ message: 'Ошибка сервера' })
	}
}

export const LinkDeleteGlobalLink = async (req, res) => {
	try {
		const { url } = req.body
		await LinkSchema.findOneAndDelete({ url })
		res.status(200).json({ message: 'объект был удален' })
	} catch (error) {
		res.status(400).json({ message: 'не удалось удалить объект' })
	}
}
export const LinkDeleteNestingLink = async (req, res) => {}
export const LinkUpdate = async (req, res) => {}
