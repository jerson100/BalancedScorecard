import React from "react";

import { Card, Row, Col, Typography, Tabs } from "antd";

import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";

import "./wrapperNav.scss";

const { TabPane } = Tabs;
// const { Meta } = Card;
// const { Title } = Typography;

const WrapperNav = ({ isMovil, tabs }) => {
  return (
    <div className="wrapperNav">
      <Row justify="center">
        <Col lg={24}>
          <Tabs defaultActiveKey="1" tabPosition={isMovil ? "top" : "left"}>
            {tabs.map((tab, i) => (
              <TabPane
                tab={
                  <span>
                    <AppleOutlined />
                    {tab.title}
                  </span>
                }
                key={i}
              >
                <tab.Component />
              </TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default WrapperNav;
