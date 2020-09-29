import React from "react";
import { Row, Col, Typography } from "antd";

// import Modal from "../../components/Modal";

import "./marcoTeorico.scss";
// import { useState } from "react";
// import { useCallback } from "react";

const { Title } = Typography;

const MarcoTeorico = () => {
  //   const [isModalVisible, setisModalVisible] = useState(false);
  //   const [descriptionModal, setDescriptionModal] = useState("");
  //   const [titleModal, settitleModal] = useState("");

  //   const openModal = useCallback((title, description) => {
  //     setisModalVisible(true);
  //     settitleModal(title);
  //     setDescriptionModal(description);
  //     // console.log(number);
  //   }, []);

  //   const closeModal = useCallback(() => {
  //     setisModalVisible(false);
  //   }, []);

  return (
    <div className="marcoTeorico">
      <Row
        justify="center"
        align="middle"
        gutter={[20, 20]}
        style={{ height: "100%" }}
      >
        <Col
          lg={4}
          //   onClick={() =>
          //     openModal(
          //       "Medidas Financieras",
          //       "Para la mayoría de las organizaciones con fines de lucro, el dinero es una prioridad. Por lo tanto, para estas organizaciones la perspectiva más importante tiene que ver con los objetivos financieros. "
          //     )
          //   }
        >
          <Title level={3} className="marcoTeorico__subtitle">
            Medidas Financieras
          </Title>
          <img
            className="marcoTeorico__img"
            src="img/presentations/marcoTeorico/marcoT-1.jpg"
            alt="medidas financieras"
          />
        </Col>
        <Col
          lg={4}
          //   onClick={() =>
          //     openModal(
          //       "Perpspectiva del cliente",
          //       "Esta perspectiva se centra en los objetivos estratégicos que están relacionados con los clientes y el mercado."
          //     )
          //   }
        >
          <Title level={3} className="marcoTeorico__subtitle">
            Perpspectiva del cliente
          </Title>
          <img
            className="marcoTeorico__img"
            src="img/presentations/marcoTeorico/marcoT-2.jpg"
            alt="perspectica cliente"
          />
        </Col>
        <Col
          lg={4}
          //   onClick={() =>
          //     openModal(
          //       "Procesos Internos",
          //       "En este dimension debe establecer metas y objetivos operativos internos o, en otras palabras, definir qué procesos que requiere actualmente la organización y qué debe hacer para mejorar su desempeño."
          //     )
          //   }
        >
          <Title level={3} className="marcoTeorico__subtitle">
            Procesos Internos
          </Title>
          <img
            className="marcoTeorico__img"
            src="img/presentations/marcoTeorico/marcoT-3.jpg"
            alt="procesos internos"
          />
        </Col>
        <Col
          lg={4}
          //   onClick={() =>
          //     openModal(
          //       "Crecimiento Organizacional",
          //       "La perspectiva de formación o aprendizaje es una guía que sirve para identificar las metas que tiene la empresa en relación a la capacitación y entrenamiento de sus colaboradores."
          //     )
          //   }
        >
          <Title level={3} className="marcoTeorico__subtitle">
            Crecimiento Organizacional
          </Title>
          <img
            className="marcoTeorico__img"
            src="img/presentations/marcoTeorico/marcoT-4.jpg"
            alt="Crecimiento Organizacional"
          />
        </Col>
      </Row>
      {/* <Modal
        visible={isModalVisible}
        handleCancel={closeModal}
        handleOk={closeModal}
        titleModal={titleModal}
      >
        <p>{descriptionModal}</p>
      </Modal> */}
    </div>
  );
};

export default MarcoTeorico;
