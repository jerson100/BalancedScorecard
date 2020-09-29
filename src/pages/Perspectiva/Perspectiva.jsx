import React from "react";

import { Row, Col, Typography, Divider, Timeline } from "antd";

import "./perspectiva.scss";
import WrapperNav from "../../components/WrapperNav";

const { Title, Paragraph } = Typography;

const Perspectiva = ({ isMovil }) => {
  return (
    <div className="perspectiva">
      <WrapperNav
        isMovil={isMovil}
        tabs={[{ title: "Definición", Component: DefinicionPerspectiva }]}
      />
    </div>
  );
};

const DefinicionPerspectiva = () => {
  return (
    <section className="perspectiva__definition je-scroll">
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={24}>
          <div className="perspectiva__definition-portada">
            <Title
              level={2}
              style={{
                marginBottom: "2rem",
                textAlign: "center",
                display: "none",
              }}
            >
              Definición
            </Title>
          </div>
        </Col>
      </Row>
      <Divider />
      <Paragraph style={{ color: "var(--bg-body)", textAlign: "center" }}>
        Es el punto de vista que tienen las personas sobre algún tema,
        acontecimiento, objeto, etc.
      </Paragraph>
      <Divider />
      <Paragraph style={{ color: "var(--bg-body)", textAlign: "center" }}>
        Practicamente es como nosotros vemos las cosas.
      </Paragraph>
      <Divider />
    </section>
  );
};

export default Perspectiva;
