import { ErrorMessage, Field, Form, Formik } from 'formik'
import css from './FormikForm.module.css'
import * as Yup from 'yup'
import TextField from '../TextField/TextField'

const userSchema = Yup.object().shape({
	firstName: Yup.string().min(3, 'Min 3').max(5, 'Max 5').required('Are you kidding me?'),
	lastName: Yup.string().min(8).required(),
})

const FormikForm = ({ toSubmit }) => {
	const handleSubmit = (values, actions) => {
		toSubmit(values)
		actions.resetForm()
	}
	return (
		<Formik
			initialValues={{
				firstName: 'Your name',
				lastName: '',
			}}
			onSubmit={handleSubmit}
			validationSchema={userSchema}
		>
			{({ handleChange, values }) => {
				return (
					<Form className={css.flex}>
						<label>
							firstNameId
							{/* <Field type='text' name='firstName' /> */}
							<TextField onChange={handleChange} value={values.firstName} name='firstName' />
							<ErrorMessage name='firstName' />
						</label>

						<br />
						<label>
							lastNameId
							<Field type='text' name='lastName' />
							<ErrorMessage name='lastName' />
						</label>
						<br />
						<button type='submit'>submit</button>
					</Form>
				)
			}}
		</Formik>
		// <Formik
		// 	initialValues={{
		// 		firstName: 'Your name',
		// 		lastName: '',
		// 		lang: 'en',
		// 	}}
		// 	onSubmit={handleSubmit}
		// 	validationSchema={userSchema}
		// >
		// 	<Form className={css.flex}>
		// 		<label>
		// 			firstNameId
		// 			<Field type='text' name='firstName' />
		// 			<ErrorMessage name='firstName' />
		// 		</label>

		// 		<br />
		// 		<label>
		// 			lastNameId
		// 			<Field type='text' name='lastName' />
		// 			<ErrorMessage name='lastName' />
		// 		</label>
		// 		<br />
		// 		<button type='submit'>submit</button>
		// 	</Form>
		// </Formik>
	)
}

export default FormikForm
