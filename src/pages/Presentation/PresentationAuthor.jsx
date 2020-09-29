import React from "react";
import Author from "../../components/Author/Author";
import { Typography } from "antd";

const { Paragraph } = Typography;

export const PresentationAuthor = ({ name, image, direction }) => {
  return (
    <div
      className={`presentation__expositor${
        direction === "TO-RIGHT" ? " presentation__expositor--to-right" : ""
      }`}
    >
      <Paragraph className="presentation__expositor-description">
        Expositor
      </Paragraph>
      <Author name={name} image={image} size="small" />
    </div>
  );
};
