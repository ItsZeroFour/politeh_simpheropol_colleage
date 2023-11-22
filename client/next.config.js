/** @type {import('next').NextConfig} */
const nextConfig = {
	entry: './src/main.js',
	target: 'node',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'backend.js',
	},
}

module.exports = nextConfig
