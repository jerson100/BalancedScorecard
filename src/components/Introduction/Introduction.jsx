import React from "react";
import { Card, Carousel, Row, Col, Typography } from "antd";

import "./introduction.scss";
import WrapperNav from "../WrapperNav";

const { Meta } = Card;
const { Title } = Typography;

const Introduction = ({ isMovil }) => {
  return (
    <div className="introduction">
      <IntroductionTabs isMovil={isMovil} />
    </div>
  );
};

const IntroductionTabs = ({ isMovil }) => {
  return (
    <WrapperNav
      isMovil={isMovil}
      tabs={[
        { title: "Introducción", Component: IntroductionAuthor },
        {
          title: "¿POR QUÉ NECESITAMOS EL BALANCE SCORECARD?",
          Component: IntroductionAuthor,
        },
      ]}
    />
  );
};

const IntroductionAuthor = () => {
  return (
    <section className="introduction__section je-scroll">
      <Row
        gutter={[20, 20]}
        justify={"center"}
        className="introduction__section-row"
      >
        <Col span={24} lg={24}>
          <Title>Introducciòn</Title>
          <p>
            Para que las micro, pequeñas y medianas empresas nacionales puedan
            afrontar los radicales cambios que le impone el nuevo entorno ope
            rativo de la era de la información, basado en las funciones
            cruzadas, los vínculos con proveedores y clientes, la segmentación
            de clientes, la escala global y los empleados de nivel, se hace
            necesario, entre otros factores, una eficiente administración de
            estos, a través de una metodología de gestión dinámica y proactiva
            que permita alinear la visión y las estrategias de la compañía con
            los resultados operativos.{" "}
          </p>
        </Col>
        <Col span={24} lg={12} style={{ padding: "0 25px" }}>
          <Card
            //   style={{ width: 300 }}

            cover={
              <Slide
                images={[
                  { alt: "Robert Koplan", url: "img/authors/robertK-1.jpg" },
                  { alt: "Robert Koplan", url: "img/authors/robertK-2.jpg" },
                  { alt: "Robert Koplan", url: "img/authors/robertK-3.jpg" },
                  { alt: "Robert Koplan", url: "img/authors/robertK-4.jpg" },
                ]}
              />
            }
          >
            <Meta
              title="Robert S. Kaplan"
              description="Kaplan comenzó su carrera académica en la Escuela de Negocios Tepper en la Universidad Carnegie-Mellon en 1968. Kaplan obtuvo una Licenciatura en Ingeniería Eléctrica y una Maestría en Ingeniería Eléctrica en el Instituto de Tecnología de Massachusetts ."
            />
          </Card>
        </Col>
        <Col span={24} lg={12} style={{ padding: "0 25px" }}>
          <Card
            cover={
              <Slide
                images={[
                  { alt: "David Norton", url: "img/authors/david-1.jpg" },
                  { alt: "David Norton", url: "img/authors/david-2.jpg" },
                  { alt: "David Norton", url: "img/authors/david-3.jpg" },
                  { alt: "David Norton", url: "img/authors/david-4.jpg" },
                ]}
              />
            }
          >
            <Meta
              title="Robert S. Kaplan"
              description="Kaplan comenzó su carrera académica en la Escuela de Negocios Tepper en la Universidad Carnegie-Mellon en 1968. Kaplan obtuvo una Licenciatura en Ingeniería Eléctrica y una Maestría en Ingeniería Eléctrica en el Instituto de Tecnología de Massachusetts ."
            />
          </Card>
        </Col>
      </Row>
    </section>
  );
};

const Slide = ({ images }) => {
  return (
    <Carousel autoplay style={{ background: "var(--bg-body)" }}>
      {images.map((img, i) => (
        <img alt={img.alt} src={img.url} key={i} />
      ))}
    </Carousel>
  );
};

export default Introduction;
