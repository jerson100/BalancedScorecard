import React from "react";
import { Row, Col, Typography } from "antd";

import "./formulacionEstrategia.scss";

const { Title } = Typography;

const FormulacionEstrategia = () => {
  return (
    <div className="formulacionEstrategia">
      <Row
        justify="center"
        align="middle"
        gutter={[20, 20]}
        style={{ height: "100%" }}
      >
        <Col xs={24} lg={4}>
          <div className="formulacionEstrategia__item">
            <Title level={2} className="formulacionEstrategia__h2">
              Formulación de la Estrategia
            </Title>
          </div>
        </Col>
        <Col xs={24} lg={4}>
          <div className="formulacionEstrategia__item">
            <Title level={2} className="formulacionEstrategia__h2">
              Balanced scorecard
            </Title>
          </div>
        </Col>
        <Col xs={24} lg={4}>
          <div className="formulacionEstrategia__item">
            <Title level={2} className="formulacionEstrategia__h2">
              Ejecución de la estrategia
            </Title>
          </div>
        </Col>
        <Col xs={24} lg={4}>
          <div className="formulacionEstrategia__item">
            <Title level={2} className="formulacionEstrategia__h2">
              Visión
            </Title>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FormulacionEstrategia;
