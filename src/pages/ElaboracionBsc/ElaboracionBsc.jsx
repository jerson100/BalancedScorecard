import React from "react";

import { Row, Col, Typography, Divider, Table, Carousel } from "antd";

import { COLUMNS_ORG, DATA_ORG } from "../../services/elaboracionBsc";

import "./elaboracionBsc.scss";
import WrapperNav from "../../components/WrapperNav";

const { Title } = Typography;

const ElaboracionBsc = ({ isMovil }) => {
  return (
    <div className="elaboracionBsc">
      <WrapperNav
        isMovil={isMovil}
        tabs={[{ title: "Ejemplos", Component: ElaboracionBscOOrganizacion }]}
      />
    </div>
  );
};

const ElaboracionBscOOrganizacion = () => {
  return (
    <section className="elaboracion__examples je-scroll">
      <Row gutter={[20, 20]}>
        <Col span={24} lg={24}>
          <Carousel autoplay={false}>
            <Table
              columns={COLUMNS_ORG}
              dataSource={DATA_ORG}
              title={() => (
                <Title level={3}>
                  Aplicación del SB Orientado a la Organización
                </Title>
              )}
            />
            <Table
              columns={COLUMNS_ORG}
              dataSource={DATA_ORG}
              title={() => (
                <Title level={3}>Aplicación del SB Orientado a las TIC</Title>
              )}
            />
          </Carousel>
        </Col>
      </Row>
    </section>
  );
};

export default ElaboracionBsc;
