import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/compare">Compare CSV </Link>
          </li>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
