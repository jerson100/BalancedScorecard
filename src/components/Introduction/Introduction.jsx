import React, { useEffect, useState } from "react";
import { Card, Carousel, Row, Col, Typography, Layout, Tabs } from "antd";

import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";

import "./introduction.scss";

const { TabPane } = Tabs;
const { Meta } = Card;
const { Title } = Typography;
// const { Content } = Layout;

const Introduction = ({ isMovil }) => {
  return (
    <div className="introduction">
      <IntroductionTabs isMovil={isMovil} />
    </div>
  );
};

const IntroductionTabs = ({ isMovil }) => {
  //   console.log(isMovil);
  return (
    <Row justify="center">
      <Col lg={24}>
        <Tabs defaultActiveKey="1" tabPosition={isMovil ? "top" : "left"}>
          <TabPane
            tab={
              <span>
                <AppleOutlined />
                Introducción
              </span>
            }
            key="1"
          >
            <IntroductionAuthor />
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Importancia de las mipymes
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                ¿Por qué necesitamos el balance scorecard?
              </span>
            }
            key="3"
          >
            Tab 3
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

const IntroductionAuthor = ({ name, description, image }) => {
  return (
    <section>
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={7}>
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
          <p>
            El reto de la competitividad es apremiante, y como es obvio estas
            empresas requieren contar con mecanismos que les permitan
            desarrollar estrategias y establecer indicadores de desempeño con el
            fin de obtener productividad y eficiencia en sus procesos, mejorar
            sus vínculos con los mercados, acceder a la innovación y la
            tecnología, modernizar la gestión de sus recursos humanos y,
            consecuentemente, lograr la rentabilidad deseada.
          </p>
          <p>
            El Balanced Scorecard, difundido desde 1992 por los profesores
            Robert Kaplan y David Norton, de la Universidad de Harvard, es una
            metodología adecuada para enfrentar exitosamente el nuevo entorno
            operativo de la actual era de la información y contribuir al
            desarrollo de las micro, pequeñas y medianas empresas del país.
          </p>
        </Col>
        <Col span={24} lg={6}>
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
        <Col span={24} lg={6}>
          <Card
            //   style={{ width: 300 }}
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
