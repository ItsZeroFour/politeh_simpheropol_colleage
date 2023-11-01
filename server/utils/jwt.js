export const generateAccessToken = (id, email) => {
	const payload = {
		id,
		email,
	}
	return jwt.sign(payload, secret, { expiresIn: '30d' })
}
