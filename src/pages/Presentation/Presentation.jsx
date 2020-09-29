import React, { useEffect, useState } from "react";
import { Typography, Layout, Tabs } from "antd";

// import "./introduction.scss";

import Carousel from "re-carousel";
import "./presentation.scss";

import Introduction from "../../components/Introduction/Introduction";

import { PresentationAuthor } from "./PresentationAuthor";
import MarcoTeorico from "../MarcoTeorico";
import FormulacionEstrategia from "../MarcoTeorico/FormulacionEstrategia/FormulacionEstrategia";
import PresentationBody from "../../components/Presentation/PresentationBody";
import VentajasContarBsc from "../VentajasContarBsc";

const { Title } = Typography;
const { Content } = Layout;

const Presentation = () => {
  const [isMovil, setIsMovil] = useState(true);

  useEffect(() => {
    const resize = () => {
      //   console.log("resize");
      if (window.matchMedia("(min-width: 1200px)").matches) {
        setIsMovil(false);
      } else {
        setIsMovil(true);
      }
    };
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener(resize);
    };
  }, []);
  return (
    <div className="presentation">
      <h1 style={{ display: "none" }}>Balanced Score Card</h1>
      <Carousel auto>
        <PresentationItem
          name="Jerson Ramírez Ortiz"
          image="img/authors/jerson.jpg"
          title="INTRODUCCIÓN"
          Component={() => <Introduction isMovil={isMovil} />}
        />
        <PresentationItem
          name="Villajuan Burillo"
          image="img/authors/villajuan.jpg"
          title="MARCO TEÓRICO DEL BALANCED SCORECARD"
          Component={() => <MarcoTeorico />}
        />
        <PresentationItem
          name="Villajuan Burillo"
          image="img/authors/villajuan.jpg"
          title="LIGANDO LA FORMULACIÓN DE LA ESTRATEGIA CON LA VISIÓN"
          Component={() => <FormulacionEstrategia />}
        />
        <PresentationItem
          name="Gustavo Alejo"
          image="img/authors/gustavo.jpg"
          title="Ventajas de contar con un BSC para TI"
          Component={() => <VentajasContarBsc isMovil={isMovil} />}
        />
        <div style={{ backgroundColor: "tomato", height: "100%" }}>Frame 1</div>
      </Carousel>
    </div>
  );
};

const PresentationWrapper = ({ children, title }) => {
  return (
    <div className="presentation__wrapper">
      <div className="presentation__content">
        <Layout style={{ height: "100%" }}>
          <Content>
            {/* <h1 style={{ display: "none" }}>Introducción</h1> */}
            <Title className="introduction__title">{title}</Title>
            {children}
          </Content>
        </Layout>
      </div>
    </div>
  );
};

const PresentationItem = ({ name, image, Component, title }) => {
  return (
    <div className="presentation__item">
      <PresentationWrapper title={title}>
        <PresentationBody>
          <Component />
        </PresentationBody>
      </PresentationWrapper>
      <PresentationAuthor name={name} image={image} />
    </div>
  );
};

export default Presentation;
