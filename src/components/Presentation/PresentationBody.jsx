import React from "react";
import "./presentationBody.scss";

const PresentationBody = ({ children }) => {
  return (
    <div
      className="presentationBody"
      style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
    >
      {children}
    </div>
  );
};

export default PresentationBody;
