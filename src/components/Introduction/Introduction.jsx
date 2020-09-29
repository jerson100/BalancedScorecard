import React from "react";
import { Card, Carousel, Row, Col, Typography, Space, Divider } from "antd";

import "./introduction.scss";
import WrapperNav from "../WrapperNav";
import Keyword from "./Keyword/Keyword";

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
          Component: IntroductionRazon,
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
          <Title style={{ textAlign: "center" }}>Introducción</Title>
          <Divider />
          <p>
            En este presente documento se presenta el Balanced Scorecard, con el
            fin de tener una idea general de como una organización debería verlo
            como un instrumento que les permita trasladar los objetivos
            estratégicos de sus empresas, a un conjunto coherente de medidas
            definidas según algunos parámetros para la medición de la gestión.
            Las empresas del siglo XXI tienen a disposición la herramienta
            Balanced Scorecard que les permitirá medir la manera en que sus
            unidades de negocios están creando valor agregado a sus clientes, al
            igual que la forma en que deben potencializarse tanto las
            capacidades internas, como las inversiones en personal, en los
            sistemas y en los procedimientos que son base necesaria para la
            mejora de la actuación a futuro de la organización.
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

const IntroductionRazon = () => {
  return (
    <section className="introduction__section je-scroll">
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={18}>
          <Space direction="vertical" size="middle">
            <Title style={{ textAlign: "center" }}>
              ¿Por qué necesitamos el balance scorecard?
            </Title>
            <p style={{ textAlign: "center" }}>
              La creciente globalización de los mercados, del mismo modo que
              crea oportunidades para incursionar en nuevos mercados extranjeros
              también trae consigo la amenaza del ingreso de nuevos competidores
              nacionales e internacionales en el mercado local, lo cual obliga a
              las em presas a ser cada vez más competitivas, y a adecuarse
              rápidamente al cambio en busca de eficiencia, eficacia y calidad
              total, con el fin de mantenerse y desarrollarse
            </p>
            <ul className="introduction__keyword">
              <Row justify="center">
                <Keyword text="Metodología" colorBg="#FF2419" />
                <Keyword text="visión de la organización" colorBg="#007BDF" />
                <Keyword text="Gestión" colorBg="#282D31" />
              </Row>
            </ul>
          </Space>
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
