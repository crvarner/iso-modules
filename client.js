import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'

function Test (props) {
	const [state, setState] = useState(0)

	function onClick () {
		setState(prev => ++prev)
	}

	return (
		<div>
			<div>{ state }</div>
			<div>
				<button onClick={onClick}>Increment</button>
			</div>
		</div>
	)
}

ReactDOM.render(<Test/>, document.getElementById("root"));
