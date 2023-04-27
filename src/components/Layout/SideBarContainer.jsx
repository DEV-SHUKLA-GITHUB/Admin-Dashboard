import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const SideBarContainer = (props) => {
  return (
    <div className="menu">
      <div className="navbar-brand-box my-3">
        <Link to="/" className="logo mx-4 px-4">
          ShopMe
        </Link>
      </div>
      <div className="h-100">
        <SideBar />
      </div>
    </div>
  );
};

export default SideBarContainer;
