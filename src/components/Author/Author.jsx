import React from "react";
import { Avatar, Typography, Space } from "antd";
import "./author.scss";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2107984_8588i4koqmo.js",
});

const { Title, Paragraph, Link } = Typography;

const Author = ({ image, name, size = "xl" }) => {
  return (
    <div className={`author${size === "small" ? " author--small" : ""}`}>
      <Space direction="vertical" size={"small"}>
        <Avatar alt={name} src={image} className="author__imagen" />
        {size === "xl" && (
          <div className="author__social">
            <Space>
              <Link href="https://ant.design" target="_blank">
                <IconFont type="icon-facebook" />
              </Link>
              <Link href="https://ant.design" target="_blank">
                <IconFont type="icon-hoveraax" />
              </Link>
              <Link href="https://ant.design" target="_blank">
                <IconFont type="icon-social-instagram" />
              </Link>
              <Link href="https://ant.design" target="_blank">
                <IconFont type="icon-gmail" />
              </Link>
            </Space>
          </div>
        )}
        <Title level={4} className="author__name">
          {name}
        </Title>
        {size === "xl" && (
          <Paragraph className="author__description">
            Me gusta la programación
          </Paragraph>
        )}
      </Space>
    </div>
  );
};

export default Author;
