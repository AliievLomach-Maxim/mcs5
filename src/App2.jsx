import { useState } from 'react'

// const Clicker = () => {
// 	const [value2, setValue2] = useState(100)

// 	const handleCLick2 = () => {
// 		setValue2(value2 + 1)
// 	}

// 	return (
// 		<>
// 			<h1>{value2}</h1>
// 			<button onClick={handleCLick2}>click 2</button>
// 		</>
// 	)
// }

const Title = ({ value }) => {
	return <div>{value}</div>
}

// const Clicker2 = ({ handleSetValue, valueKey }) => {
// 	const handleClick = () => {
// 		handleSetValue(valueKey)
// 	}
// 	return <button onClick={handleClick}>click 2</button>
// }
const Clicker2 = ({ handleSetValue }) => {
	return <button onClick={handleSetValue}>click 2</button>
}
// const Clicker2 = ({ handleSetValue }) => {
// 	return <button onClick={() => handleSetValue('value1')}>click 2</button>
// }
//
// =======
//
// function App() {
// 	const [value, setValue] = useState(10)
// 	const [value2, setValue2] = useState(10)

// 	const handleSetValue = () => {
// 		setValue(value + 1)
// 	}
// 	const handleSetValue2 = () => {
// 		setValue2(value2 + 1)
// 	}
// 	return (
// 		<>
// 			<Title value={value} />
// 			<Title value={value2} />
// 			<Title value={value2 + value} />

// 			<Clicker2 handleSetValue={handleSetValue} />
// 			<Clicker2 handleSetValue={handleSetValue2} />
// 		</>
// 	)
// }
function App() {
	const [valueObj, setValueObj] = useState({
		value1: 10,
		value2: 100,
	})

	const handleSetValue = (key) => {
		// setValueObj(valueObj[key] + 1)
		setValueObj({
			...valueObj,
			[key]: valueObj[key] + 1,
		})
	}

	return (
		<>
			<Title value={valueObj.value1} />
			<Title value={valueObj.value2} />
			<Title value={valueObj.value2 + valueObj.value1} />

			{/* <Clicker2 handleSetValue={handleSetValue} />
			<Clicker2 handleSetValue={handleSetValue} /> */}

			<Clicker2 handleSetValue={() => handleSetValue('value1')} />
			<Clicker2 handleSetValue={() => handleSetValue('value2')} />

			{/* <Clicker2 handleSetValue={handleSetValue} valueKey='value1' />
			<Clicker2 handleSetValue={handleSetValue} valueKey='value2' /> */}
		</>
	)
}

export default App

// function par() {

// let value = 10
// const setValue = (val) => { value = val }

// 	child1(value, setValue)
// 	child2(value, setValue)
// }

// function child1(value, setValue) {
// 	console.log(value)
// 	setValue(12)
// }

// function child2(value, setValue) {
// 	console.log(value)
// 	setValue(11)
// }

// let user = {
// 	name: 'Alex',
// 	age: 42,
// }

// // user = 'bob'
// user = {
// 	...user,
// 	name:'bob'
// }
