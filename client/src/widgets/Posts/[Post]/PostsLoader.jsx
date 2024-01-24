import ContentLoader from 'react-content-loader'
const PostsLoader = props => (
	<ContentLoader
		speed={2}
		width={360}
		height={600}
		viewBox='0 0 360 600'
		backgroundColor='#1f1f1f'
		foregroundColor='#2c2c2c'
		{...props}
	>
		<rect x='7' y='356' rx='10' ry='10' width='343' height='47' />
		<rect x='44' y='420' rx='0' ry='0' width='1' height='0' />
		<rect x='5' y='22' rx='21' ry='21' width='350' height='300' />
		<rect x='151' y='181' rx='0' ry='0' width='37' height='1' />
		<rect x='109' y='332' rx='9' ry='9' width='152' height='19' />
	</ContentLoader>
)

export default PostsLoader
