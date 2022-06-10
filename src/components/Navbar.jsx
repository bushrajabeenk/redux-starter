import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAPI } from "../store/auth/auth.actions";

const Navbar = () => {
  // const isAuthenticated = true;

  // const navigate = useNavigate();

  // const handleLoginClick = () => {
  //   // login screen
  //   if (isAuthenticated) {
  //     navigate("/login");
  //     // he wants to logout
  //   } else {
  //     // he wants to login
  //     navigate("/login");
  //   }
  // };

  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(logoutAPI());
  };

  return (
    <div
      data-cy="navbar"
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
