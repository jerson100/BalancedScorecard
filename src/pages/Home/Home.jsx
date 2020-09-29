import React from "react";
import { Layout, Typography, Row, Col, Button } from "antd";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import "antd/dist/antd.css";
import "./home.scss";
import Author from "../../components/Author/Author";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="home">
      <Confetti width={width} height={height} />
      <Layout className="home__section">
        <Content>
          <Row justify={"center"} align={"middle"}>
            <Col span={24} sm={24} lg={18} xxl={13}>
              <div className="home__content">
                <Title className="home__title">INTEGRANTES</Title>
                <Row gutter={[30, 30]} justify={"center"}>
                  <Col span={24} xl={8}>
                    <Author
                      name="Jerson Ramírez Ortiz"
                      image="img/authors/jerson.jpg"
                    />
                  </Col>
                  <Col span={24} xl={8}>
                    <Author
                      name="Caldas Aguilar José"
                      image="img/authors/caldas.jpg"
                    />
                  </Col>
                  <Col span={24} xl={8}>
                    <Author
                      name="Ricardo Villajuan Burillo"
                      image="img/authors/villajuan.jpg"
                    />
                  </Col>
                  <Col span={24} xl={8}>
                    <Author
                      name="Gustavo Evangelista Alejo"
                      image="img/authors/gustavo.jpg"
                    />
                  </Col>
                  <Col span={24} xl={8}>
                    <Author
                      name="Dennys Guerrero Victor"
                      image="img/authors/dennys.jpg"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Button className="home__button" type="primary">
        <Link to="/presentation">Iniciar Presentación</Link>
      </Button>
    </div>
  );
};

export default Home;
