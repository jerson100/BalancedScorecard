import React from "react";

import { Row, Col, Tabs } from "antd";

import { AppleOutlined } from "@ant-design/icons";

import "./wrapperNav.scss";

const { TabPane } = Tabs;

const WrapperNav = ({ isMovil, tabs }) => {
  return (
    <div className="wrapperNav">
      <Row justify="center">
        <Col lg={24}>
          <Tabs defaultActiveKey="0" tabPosition={isMovil ? "top" : "left"}>
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
