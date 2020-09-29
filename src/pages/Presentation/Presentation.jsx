import React from "react";
import Carousel from "re-carousel";
import "./presentation.scss";
import Introduction from "../../components/Introduction/Introduction";

import { PresentationAuthor } from "./PresentationAuthor";

const Presentation = () => {
  return (
    <div className="presentation">
      <h1 style={{ display: "none" }}>Balanced Score Card</h1>
      <Carousel auto>
        <PresentationItem
          name="Jerson Ramírez Ortiz"
          image="img/authors/jerson.jpg"
        />
        <PresentationItem
          name="Caldas Aguilar José"
          image="img/authors/caldas.jpg"
        />
        <PresentationItem name="Villajuan" image="img/authors/villajuan.jpg" />
        <div style={{ backgroundColor: "tomato", height: "100%" }}>Frame 1</div>
      </Carousel>
    </div>
  );
};

const PresentationItem = ({ name, image }) => {
  return (
    <div className="presentation__item">
      <Introduction title="Introducción" />
      <PresentationAuthor name={name} image={image} />
    </div>
  );
};

export default Presentation;
