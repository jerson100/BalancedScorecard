import React from "react";

import { Row, Col, Typography, Divider, Timeline } from "antd";

import "./ventajasContarBsc.scss";
import WrapperNav from "../../components/WrapperNav";

const { Title } = Typography;

const VentajasContarBsc = ({ isMovil }) => {
  return (
    <div className="ventajasContarBsc">
      <WrapperNav
        isMovil={isMovil}
        tabs={[
          { title: "Examples", Component: Examples },
          {
            title: "Conclusiones",
            Component: Conclusiones,
          },
          {
            title: "Barreras para desarrollar el BSC de TI",
            Component: Barreras,
          },
        ]}
      />
    </div>
  );
};

const data = [
  "Crear y medir el valor agregado por TI al negocio.",
  "Reconocer costos tangibles e intangibles.",
  "Reconocer la responsabilidad del negocio y de TI en la creación del valor.",
  "Entender cómo TI está ayuda al negocio a alcanzar sus objetivos (en el pasado, en el presente y en el futuro).",
  "Responder a preguntas como:",
  "Si invierto fondos extra en TI, ¿cómo logro el retorno?",
  "¿Cómo comparo a mi TI con respecto a las de los competidores?",
  "¿Logré de TI lo que prometieron?",
  "¿Cómo aprendo del pasado para optimizar mi organización?",
  "¿Está mi TI implementando una estrategia en línea con la estrategia del negocio?",
];

const Examples = () => {
  return (
    <section className="ventajasContarBsc__examples je-scroll">
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={24}>
          <Title
            level={2}
            style={{ marginBottom: "2rem", textAlign: "center" }}
          >
            Ejemplos
          </Title>
          <Divider />
          <div className="ventajasContarBsc__examples-content">
            <Timeline>
              {data.map((d, i) => (
                <Timeline.Item key={i}>{d}</Timeline.Item>
              ))}
            </Timeline>
          </div>
        </Col>
      </Row>
    </section>
  );
};

const data1 = [
  "Ausencia de una clara definición de visión y estrategia de negocio.",
  "Estrategias no coordinadas con los departamentos, los equipos de trabajo ni con los objetivos individuales.",
  "Estrategias no coordinadas para la asignación de recursos en el corto y el largo plazo.",
  "Retroalimentación a nivel táctico pero no a nivel estratégico.",
];

const Barreras = () => {
  return (
    <section className="ventajasContarBsc__examples je-scroll">
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={24}>
          <Title
            level={2}
            style={{ marginBottom: "2rem", textAlign: "center" }}
          >
            Barreras
          </Title>
          <Divider />
          <div className="ventajasContarBsc__examples-content">
            <Timeline>
              {data1.map((d, i) => (
                <Timeline.Item key={i}>{d}</Timeline.Item>
              ))}
            </Timeline>
          </div>
        </Col>
      </Row>
    </section>
  );
};

const data2 = [
  "Las organizaciones que buscan el gobierno de TI a menudo se preguntarán:",
  "¿Cómo obtenemos valor para el negocio desde las áreas de TI?",
  "¿Cómo nos aseguramos que TI esté invirtiendo en buenos proyectos para el negocio?",
  "¿Cómo controlamos a nuestras áreas de TI?",
  "Estas respuestas pueden ser soportadas por una cascada de BSCs de TI. El balanced scorecard es una herramienta de medición apropiada para soportar al gobierno de TI.",
];

const Conclusiones = () => {
  return (
    <section className="ventajasContarBsc__examples je-scroll">
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={24}>
          <Title
            level={2}
            style={{ marginBottom: "2rem", textAlign: "center" }}
          >
            Conclusiones
          </Title>
          <Divider />
          <div className="ventajasContarBsc__examples-content">
            <Timeline>
              {data2.map((d, i) => (
                <Timeline.Item key={i}>{d}</Timeline.Item>
              ))}
            </Timeline>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default VentajasContarBsc;
