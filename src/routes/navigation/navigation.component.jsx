import { Link, Outlet } from "react-router-dom";

import "./navigation.style.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo-symbol">{"{"}&nbsp;</div>
          <div> starry </div>
          <div className="logo-symbol">&nbsp;{"}"}</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            About
          </Link>
          <Link className="nav-link" to="/project">
            Project
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
