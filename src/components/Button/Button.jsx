import css from './Button.module.css'
import clsx from 'clsx'

const Button = ({ children, variant, size, type }) => {
	return (
		<button
			className={clsx(
				css.btn,
				css.md,
				variant === 'primary' && css.primary,
				size === 'lg' && css.lg,
				css.icon && type === 'icon'
			)}
		>
			{children}
		</button>
	)
}

export default Button
