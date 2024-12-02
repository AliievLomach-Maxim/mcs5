import { Field, Form, Formik } from 'formik'

const SearchForm = ({ search }) => {
	const handleSubmit = (values, actions) => {
		search(values.query)
		actions.resetForm()
	}
	return (
		<Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
			<Form>
				<Field name='query' type='text' />
				<button type='submit'>Search</button>
			</Form>
		</Formik>
	)
}

export default SearchForm
