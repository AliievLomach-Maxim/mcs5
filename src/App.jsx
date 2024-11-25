import ControlForm from './components/ControlForm/ControlForm'

const App = () => {
	const toSubmit = (data) => {
		console.log('data', data)
	}
	return (
		<div>
			<ControlForm toSubmit={toSubmit} />
		</div>
	)
}

export default App
// import Form from './components/Form/Form'

// const App = () => {
// 	const handleSubmit = (data) => {
// 		//
// 		console.log('data', data)
// 	}
// 	const handleSubmit2 = (data) => {
// 		//
// 		console.log('data!!!!!!!', data)
// 	}
// 	return (
// 		<div>
// 			{/* <Form submit={handleSubmit} />
// 			<hr />
// 			<Form submit={handleSubmit2} /> */}
// 			<hr />
// 			<hr />
// 		</div>
// 	)
// }

// export default App
