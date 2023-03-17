import Heading from "../Header/Heading";
import "./MainNav.css";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../images/home-icon.svg";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "../../images/movie-icon.svg";
import TheatersIcon from "../../images/series-icon.svg";
import $ from "jquery";
import {AuthContext} from "../context/UserContext";


$(function () {
  $(document).on("scroll", function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

const MainNav = () => {
  const {getCurrentUser, logOut} = useContext(AuthContext);
  
  const getUser = () => {
    // return user;
    return {email: "noa@gmail.com", password: "123", name: "noa"}
  }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <Link className="navbar-brand" to="/">
          <Heading />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active  nav__link">
              <Link className="nav-link" to="/">
                <img
                  src={HomeIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginRight: "0px",
                  }}
                  alt=""
                />
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/Statistics">
                <WhatshotIcon
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",

                    marginRight: "2px",
                  }}
                />
                Statistics
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/all-movies">
                <img
                  src={MovieIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "2px",
                    marginRight: "1px",
                  }}
                  alt=""
                />
                Movies
              </Link>
            </li>
          </ul>

          {
            getUser() == null ? 
            (<div className="all__right">
              <div className="btn-login">
                <Link to="/login">
                  <button className=" login-btn">login</button>
                </Link>
              </div>
            </div>) : 
            (<div className="user_profie_btn">
              {/* hello, {getUser().name} */}
                <Link to="/userProfile">
                  <button className="user-profile-btn">User Profile</button>
                </Link>
            {/* (<div className="all__right">
              hello, {getUser().email}
              <div className="btn-login">
                <Link to="/login">
                  <button className=" login-btn" onClick={logOut}>logout</button>
                </Link>
              </div> */}
            </div>)
          }
        </div>
      </nav>
    </>
  );
};

export default MainNav;
