import { useEffect, useState } from 'react'
import Timer from './components/Timer/Timer'

const App = () => {
	// const [click, setClick] = useState(0)
	const [click, setClick] = useState(() => {
		const clicks = localStorage.getItem('clicks')
		if (clicks !== null) {
			return JSON.parse(clicks)
		}
		return 0
	})
	const [click2, setClick2] = useState(0)
	const [isShow, setIsShow] = useState(false)

	// Mount
	// useEffect(() => {
	// 	console.log('Effect')
	// 	const clicks = localStorage.getItem('clicks')
	// 	if (clicks !== null) {
	// 		setClick(JSON.parse(clicks))
	// 	}
	// }, [])

	// Mount + Update
	useEffect(() => {
		console.log('click', click)
		// if (click !== 0)
		localStorage.setItem('clicks', click)
	}, [click])

	// Update
	useEffect(() => {
		if (click2 === 0) return
		console.log('click 2', click2)
	}, [click2])

	// useEffect(() => {
	// 	console.log(click)
	// 	// ....
	// }, [click, click2, int])

	return (
		<div>
			<button onClick={() => setClick(click + 1)}>{click}</button>
			<button onClick={() => setClick2(click2 + 1)}>{click2}</button>
			<br />
			<button onClick={() => setIsShow(!isShow)}>click</button>
			{isShow && <Timer />}
		</div>
	)
}

export default App
