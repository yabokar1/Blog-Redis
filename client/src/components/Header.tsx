import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../reducers"; // Adjust path as needed

// Define the type for the component's props
interface HeaderProps {
  auth?: boolean | null;
}

const Header: React.FC<HeaderProps> = () => {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(`The auth is ${auth}`);

  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="http://localhost:5000/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <>
            <li key="3" style={{ margin: "0 10px" }}>
              <Link to="/blogs">My Blogs</Link>
            </li>
            <li key="2">
              <a href="/auth/logout">Logout</a>
            </li>
          </>
        );
    }
  };

  return (
    <nav className="indigo">
      <div className="nav-wrapper">
        <Link
          to={auth ? "/blogs" : "/"}
          className="left brand-logo"
          style={{ marginLeft: "10px" }}
        >
          Blogster
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
