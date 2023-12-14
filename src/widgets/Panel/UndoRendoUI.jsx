'use client'
import { useDispatch } from 'react-redux'
import { ActionCreators } from 'redux-undo'

import Redo from '@widgets/Panel/Redo.jsx'
import Undo from '@widgets/Panel/Undo.jsx'

export function Counter() {
	const dispatch = useDispatch()

	return (
		<div>
			<div>
				<button
					aria-label='Undo last change'
					onClick={() => dispatch(ActionCreators.undo())}
					style={{ marginLeft: 10 }}
				>
					<Undo />
				</button>
				<button
					aria-label='Undo last change'
					onClick={() => dispatch(ActionCreators.redo())}
					style={{ marginLeft: 10 }}
				>
					<Redo />
				</button>
			</div>
		</div>
	)
}
