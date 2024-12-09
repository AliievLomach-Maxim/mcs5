import { NavLink } from 'react-router-dom'
// import './Navigation.css'
import css from './Navigation.module.css'

const Navigation = () => {
  const getActiveClass = ({ isActive }) => {
    return isActive ? css.active : ''
  }
  return (
    <nav>
      <NavLink className={getActiveClass} to='/'>
        Home
      </NavLink>
      <NavLink className={getActiveClass} to='/about'>
        about
      </NavLink>
      <NavLink className={getActiveClass} to='/articles'>
        articles
      </NavLink>
    </nav>
  )
}

export default Navigation
