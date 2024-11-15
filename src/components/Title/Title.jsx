import clsx from 'clsx'
import css from './Title.module.css'
import { ImAirplane } from 'react-icons/im'

const Title = ({ children, varian, tag }) => {
	const classnames = clsx(
		css.title,
		varian === 'primary' && css.primary,
		varian === 'secondary' && css.secondary
	)
	return (
		<>
			{tag === 'h1' ? (
				<h className={classnames}>{children}</h>
			) : tag === 'h2' ? (
				<h2 className={classnames}>{children}</h2>
			) : (
				<p className={classnames}>
					{children}
					<ImAirplane className={css.icon} />
				</p>
			)}
		</>
	)
}

export default Title
