import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
