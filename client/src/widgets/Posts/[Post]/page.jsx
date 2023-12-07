import { Interweave } from 'interweave'
import { useSelector } from 'react-redux'

export default function Post({ params }) {
	const dataOurCollege2 = useSelector(
		state => state.counter.present.dataOurCollege
	)
	console.log(dataOurCollege2)
	const id = params.collegeId
	const result = dataOurCollege2.filter(
		el => el.pageUrl == id && el.pageType == 'post'
	)
	console.log('result0', result)
	const resultObj = result.map(el => el.pageContent)
	console.log('result', resultObj)
	return (
		<div>
			<Interweave content={resultObj + ''} />
		</div>
	)
}
