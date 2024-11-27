import FormikForm from './components/FormikForm/FormikForm'

const App = () => {
	// const firstNameId = useId()
	// const lastNameId = useId()

	const handleSubmit = (data) => {
		console.log('data', data)
	}
	return (
		<div>
			<FormikForm toSubmit={handleSubmit} />
		</div>
	)
}

export default App
