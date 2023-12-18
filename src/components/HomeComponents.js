import React from "react";
import leaf from "../assets/images/leaf.png";
import "../assets/css/buttons.css";
import naruto_logo from "../assets/images/narutouniverse.webp";
import naruto_head from "../assets/images/naruto-head.webp";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContent = styled.h1`
  font-family: "Permanent Marker", cursive;
`;

function HomeComponents() {
  return (
    <section>
      <div id="header-hero">
        {" "}
        <div className="header-bg">
          {" "}
          <img src={naruto_logo} alt="header-image" />{" "}
        </div>
        <div className="header-content">
          <HeaderContent>naruto character book</HeaderContent>
          <p className="description">
            Explore the immersive world of Naruto like never before with the
            Naruto Character Book Hub! Dive deep into the captivating universe
            of ninjas, jutsus, and epic battles through our meticulously crafted
            character profiles. Whether you're a die-hard fan or a newcomer to
            the Hidden Leaf Village, our site offers a comprehensive collection
            of detailed biographies, stunning illustrations, and in-depth
            analyses of your favorite Naruto characters.
          </p>
          <img src={naruto_head} />

          <Link to="characters">
            {" "}
            <div className="button">
              {" "}
              <img className="leaf" src={leaf} />
              <p>get started</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeComponents;
