import React from "react";

import "./keyword.scss";

const Keyword = ({ text, colorBg, colorText = "#fff" }) => {
  return (
    <div className="keyword" style={{ backgroundColor: colorBg }}>
      <p className="keyword__content" style={{ color: colorText }}>
        {text}
      </p>
    </div>
  );
};

export default Keyword;
