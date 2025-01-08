import { Link, Outlet } from 'react-router-dom'

const LayoutSidebar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
      <h1>HELLO</h1>
      <Outlet />
    </>
  )
}

export default LayoutSidebar
