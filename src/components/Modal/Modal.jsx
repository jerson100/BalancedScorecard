import React from "react";
import { Modal as ModalAnt } from "antd";

const Modal = ({ children, visible, handleOk, handleCancel, titleModal }) => {
  return (
    <ModalAnt
      title={titleModal}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </ModalAnt>
  );
};

export default Modal;
