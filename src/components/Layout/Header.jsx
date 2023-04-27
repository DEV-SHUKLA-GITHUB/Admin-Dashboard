import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarContainer from "./SideBarContainer";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    return <div>hello</div>;
  };
  return (
    <header id="page-topbar" className="d-flex w-100">
      <div className="navbar-header d-flex w-100 justify-content-between">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <Link
              to="/"
              // className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center"
            >
              <span>Dashboard</span>
            </Link>
            <span> / </span>
            <Link
              to="/transactions"
              // className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center"
            >
              <span>Transactions</span>
            </Link>
          </div>
          <div className="header-navigation">
            <FontAwesomeIcon icon="fa-solid fa-sun-bright" />
            <FontAwesomeIcon icon="fa-solid fa-user" className="p-1" />
            <FontAwesomeIcon icon="fa-solid fa-gear" className="p-1" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
