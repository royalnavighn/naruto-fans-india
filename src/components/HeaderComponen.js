import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import naruto_logo from "../assets/images/Naruto_logo.png";

const HeaderFont = styled.h1`
  font-family: "Permanent Marker", cursive;
`;

export default function HeaderComponen() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will go back to the previous page in the browser's history
  };

  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <Link to="/">
          {" "}
          <img className="narutologo" src={naruto_logo} alt="logo" />
        </Link>
      </div>
      <div className="navitems">
        {/* <Link to={"joinourteam   "}>
          <HeaderFont className="navitem">Join Our Team</HeaderFont>
        </Link> */}
        {currentPath === "/" ? (
          <Link to="characters">
            {" "}
            <HeaderFont className="navitem"> Characters </HeaderFont>
          </Link>
        ) : (
          <Link onClick={goBack}>
            {" "}
            <HeaderFont className="navitem">Back</HeaderFont>{" "}
          </Link>
        )}
      </div>
    </header>
  );
}
