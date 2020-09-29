import React, { useEffect, useState } from "react";
import { Typography, Layout } from "antd";

import Carousel from "re-carousel";
import "./presentation.scss";

import Introduction from "../../components/Introduction/Introduction";

import { PresentationAuthor } from "./PresentationAuthor";
import MarcoTeorico from "../MarcoTeorico";
import FormulacionEstrategia from "../MarcoTeorico/FormulacionEstrategia/FormulacionEstrategia";
import PresentationBody from "../../components/Presentation/PresentationBody";
import VentajasContarBsc from "../VentajasContarBsc";
import Perspectiva from "../Perspectiva";
import ElaboracionBsc from "../ElaboracionBsc/ElaboracionBsc";

const { Title } = Typography;
const { Content } = Layout;

const Presentation = () => {
  const [isMovil, setIsMovil] = useState(true);

  useEffect(() => {
    const resize = () => {
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
          images={[
            { name: "Jose Caldas Aguilar", image: "img/authors/caldas.jpg" },
          ]}
          title="INTRODUCCIÓN"
          backgroundImage="img/ports/perspectiva.jpg"
          Component={() => <Introduction isMovil={isMovil} />}
        />
        <PresentationItem
          images={[
            {
              name: "Ricardo Villajuan Burillo",
              image: "img/authors/villajuan.jpg",
            },
          ]}
          title="MARCO TEÓRICO DEL BALANCED SCORECARD"
          backgroundImage="img/ports/port-2.jpg"
          Component={() => <MarcoTeorico />}
        />
        <PresentationItem
          images={[
            {
              name: "Ricardo Villajuan Burillo",
              image: "img/authors/villajuan.jpg",
            },
          ]}
          title="LIGANDO LA FORMULACIÓN DE LA ESTRATEGIA CON LA VISIÓN"
          backgroundImage="img/ports/port-3.jpg"
          Component={() => <FormulacionEstrategia />}
        />
        <PresentationItem
          images={[
            { name: "Jerson Ramírez Ortiz", image: "img/authors/jerson.jpg" },
            {
              name: "Dennys Guerrero",
              image: "img/authors/dennys.jpg",
              direction: "TO-RIGHT",
            },
          ]}
          title="Perspectiva"
          backgroundImage="img/ports/port-2.jpg"
          Component={() => <Perspectiva isMovil={isMovil} />}
        />
        <PresentationItem
          images={[
            { name: "José Caldas Aguilar", image: "img/authors/caldas.jpg" },
          ]}
          title="Aplicación del BSC"
          backgroundImage="img/ports/perspectiva.jpg"
          Component={() => <ElaboracionBsc isMovil={isMovil} />}
        />
        <PresentationItem
          images={[{ name: "Gustavo Alejo", image: "img/authors/gustavo.jpg" }]}
          title="Ventajas de contar con un BSC para TI"
          backgroundImage="img/ports/port-1.jpg"
          Component={() => <VentajasContarBsc isMovil={isMovil} />}
        />
        <div style={{ backgroundColor: "tomato", height: "100%" }}>Frame 1</div>
      </Carousel>
    </div>
  );
};

const PresentationWrapper = ({ children, title, backgroundImage }) => {
  return (
    <div className="presentation__wrapper">
      <div className="presentation__content">
        <Layout style={{ height: "100%" }}>
          <Content>
            <div className="presentation__title-container">
              <div
                className="presentation__title-bg"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
              ></div>
              <Title className="presentation__title">{title}</Title>
            </div>
            {children}
          </Content>
        </Layout>
      </div>
    </div>
  );
};

const PresentationItem = ({ images, Component, title, backgroundImage }) => {
  return (
    <div className="presentation__item">
      <PresentationWrapper title={title} backgroundImage={backgroundImage}>
        <PresentationBody>
          <Component />
        </PresentationBody>
      </PresentationWrapper>
      {images.map((image, i) => (
        <PresentationAuthor
          key={i}
          name={image.name}
          image={image.image}
          direction={image.direction}
        />
      ))}
    </div>
  );
};

export default Presentation;
