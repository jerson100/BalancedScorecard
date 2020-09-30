import React from "react";

import { Row, Col, Typography, Divider, Collapse, Timeline } from "antd";

import "./perspectiva.scss";
import WrapperNav from "../../components/WrapperNav";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const Perspectiva = ({ isMovil }) => {
  return (
    <div className="perspectiva">
      <WrapperNav
        isMovil={isMovil}
        tabs={[
          { title: "Definición", Component: DefinicionPerspectiva },
          { title: "Perspectivas del BSC", Component: PerspectivaBSC },
          {
            title: "Perspectivas del BSC para TI",
            Component: PerspectivaBSC_TI,
          },
        ]}
      />
    </div>
  );
};

const DefinicionPerspectiva = () => {
  return (
    <section className="perspectiva__definition je-scroll">
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={24}>
          <div
            className="perspectiva__definition-portada"
            style={{ backgroundImage: "url('img/ports/perspectiva.jpg')" }}
          >
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
const PerspectivaBSC = () => {
  return (
    <section className="perspectiva__definition perspectiva__perspectivaBSC je-scroll">
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={24}>
          <div
            className="perspectiva__definition-portada"
            style={{ backgroundImage: "url('img/ports/perspectiva.jpg')" }}
          >
            <Title
              level={2}
              style={{
                marginBottom: "2rem",
                textAlign: "center",
                display: "none",
              }}
            >
              Las cuatro perspectivas del BSC para Ti
            </Title>
          </div>
        </Col>
      </Row>
      <Divider />
      <Collapse>
        <Panel header="Perspectiva Financiera" key="1">
          <p>Resume las consecuencias económicas</p>
        </Panel>
        <Panel header="Perspectiva del cliente" key="2">
          <p>
            Permite que las empresas fijen sus indicadores clave sobre los
            clientes, su satisfacción, fidelidad, retención, adquisición y
            rentabilidad, en los sectores y mercados seleccionados.
          </p>
        </Panel>
        <Panel header="Perspectiva del proceso interno" key="3">
          <p>
            Identifica los procesos críticos. Busca la satisfacción del cliente
            y de los objetivos financieros a través de la mejora y la medición
            de los procesos actuales y los procesos nuevos.
          </p>
        </Panel>
        <Panel header="Perspectiva de formación y crecimiento" key="4">
          <p>
            Identifica la estructura necesaria para crear crecimiento a largo
            plazo.
          </p>
        </Panel>
      </Collapse>
    </section>
  );
};
const PerspectivaBSC_TI = () => {
  return (
    <section className="perspectiva__definition perspectiva__perspectivaBSC_TI je-scroll">
      <Row gutter={[20, 20]} justify={"center"}>
        <Col span={24} lg={24}>
          <div
            className="perspectiva__definition-portada"
            style={{ backgroundImage: "url('img/ports/perspectiva.jpg')" }}
          >
            <Title
              level={2}
              style={{
                marginBottom: "2rem",
                textAlign: "center",
                display: "none",
              }}
            >
              Las perspectivas del BSC cambian para TI
            </Title>
          </div>
        </Col>
      </Row>
      <Divider />
      <Collapse>
        <Panel header="Orientación al usuario" key="1">
          <Title level={3}>Definición</Title>
          <p>
            Mide la evaluación de TI desde el punto de vista del usuario interno
            y externo.
          </p>
          <Divider />
          <Title level={3}>Ejemplos:</Title>
          <Divider />
          <Timeline>
            <Timeline.Item key={1}>
              <p>Proveedor de TI preferido:</p>
              <Timeline>
                <Timeline.Item>
                  Porcentaje de aplicaciones administradas por TI
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
            <Timeline.Item key={2}>
              <p>Relación con los usuarios:</p>
              <Timeline>
                <Timeline.Item>
                  Índice de participación de usuarios involucrados con la
                  generación de aplicaciones estratégicas
                </Timeline.Item>
                <Timeline.Item>
                  Índice de participación de usuarios involucrados en el
                  desarrollo de nuevas aplicacione
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
            <Timeline.Item key={3}>
              <p>Satisfacción de los usuarios:</p>
              <Timeline>
                <Timeline.Item>
                  Índice de facilidad de utilización de las aplicaciones
                </Timeline.Item>
                <Timeline.Item>
                  Índice de satisfacción del usuario.
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
          </Timeline>
        </Panel>
        <Panel header="Contribución al negocio:" key="2">
          <Title level={3}>Definición: </Title>
          <p>Captura el valor creado desde TI para el negocio.</p>
          <Divider />
          <Title level={3}>Ejemplos</Title>
          <Divider />
          <Timeline>
            <Timeline.Item>
              <p>Control del gasto de TI</p>
              <Timeline>
                <Timeline.Item>
                  Porcentaje por debajo o por encima del presupuesto de TI.
                </Timeline.Item>
                <Timeline.Item>
                  Asignación del presupuesto a los diferentes items
                </Timeline.Item>
                <Timeline.Item>
                  Presupuesto de TI como porcentaje de las ventas.
                </Timeline.Item>
                <Timeline.Item>
                  Gastos de TI por miembros del staff.
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
          </Timeline>
        </Panel>
        <Panel header="Excelencia operacional" key="3">
          <Title level={3}>Definición: </Title>
          <p>
            Mide los procesos empleados para desarrollar y entregar los
            servicios de TI.
          </p>
          <Divider />
          <Title level={3}>Ejemplos: </Title>
          <Divider />
          <Timeline>
            <Timeline.Item>
              <p>Eficiencia en el desarrollo de software.</p>
              <Timeline>
                <Timeline.Item>
                  Días promedio en la tardanza de entrega de software.
                </Timeline.Item>
                <Timeline.Item>
                  Porcentaje de proyectos manejados dentro de los SLAs.
                </Timeline.Item>
                <Timeline.Item>
                  Porcentaje de actividades de mantenimiento.
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
            <Timeline.Item>
              <p>Eficiencia en las operaciones</p>
              <Timeline>
                <Timeline.Item>
                  Porcentaje de falta de disponibilidad de la red.
                </Timeline.Item>
                <Timeline.Item>
                  Tiempos de respuesta por categorías de usuarios.
                </Timeline.Item>
                <Timeline.Item>
                  Porcentaje de trabajos hechos dentro del tiempo convenido.
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
            <Timeline.Item>
              <p>Eficiencia de la función del help desk</p>
              <Timeline>
                <Timeline.Item>
                  Tiempo promedio de respuesta del help desk.
                </Timeline.Item>
                <Timeline.Item>
                  Porcentaje de preguntas resueltas dentro del tiempo acordado.
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
          </Timeline>
        </Panel>
        <Panel header="Orientación al futuro" key="4">
          <Title level={3}>Definición: </Title>
          <p>Captura el valor creado desde TI para el negocio.</p>
          <Divider />
          <Title level={3}>Ejemplos:</Title>
          <Divider />
          <Timeline>
            <Timeline.Item>
              <p>Entrenamiento y capacitación del personal:</p>
              <Timeline>
                <Timeline.Item>
                  Número de días de entrenamiento por persona.
                </Timeline.Item>
                <Timeline.Item>
                  Porcentaje del presupuesto dedicado a capacitación.
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
            <Timeline.Item>
              <p>Experiencia del personal de TI:</p>
              <Timeline>
                <Timeline.Item>
                  Número de años de experiencia en TI de los miembros del
                  personal.
                </Timeline.Item>
                <Timeline.Item>
                  Pirámide de edad de los miembros de TI.
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
            <Timeline.Item>
              <p>Investigación en tecnologías emergentes:</p>
              <Timeline>
                <Timeline.Item>
                  Porcentaje del presupuesto gastado en investigación de TIs
                </Timeline.Item>
              </Timeline>
            </Timeline.Item>
          </Timeline>
        </Panel>
      </Collapse>
    </section>
  );
};

export default Perspectiva;
