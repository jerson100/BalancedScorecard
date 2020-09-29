import React from "react";
import Author from "../../components/Author/Author";
import { Typography } from "antd";

const { Paragraph } = Typography;

export const PresentationAuthor = ({ name, image }) => {
  return (
    <div className="presentation__expositor">
      <Paragraph className="presentation__expositor-description">
        Expositor
      </Paragraph>
      <Author name={name} image={image} size="small" />
    </div>
  );
};
