import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/articles'>articles</Link>
          </li>
          <li>
            <Link to='/profile'>profile</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer></footer>
    </>
  )
}

export default Layout
