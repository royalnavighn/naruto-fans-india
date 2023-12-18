import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import naruto_logo from "../assets/images/Naruto_logo.png";

const HeaderFont = styled.h1`
  font-family: "Permanent Marker", cursive;
`;

export default function HeaderComponen() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <Link to="/">
          {" "}
          <img className="narutologo" src={naruto_logo} alt="logo" />
        </Link>
      </div>
      {currentPath === "/" ? (
        <Link to="characters">
          {" "}
          <HeaderFont className="navitem"> Characters </HeaderFont>
        </Link>
      ) : (
        <Link to={-1}>
          {" "}
          <HeaderFont className="navitem">Back</HeaderFont>{" "}
        </Link>
      )}
    </header>
  );
}
