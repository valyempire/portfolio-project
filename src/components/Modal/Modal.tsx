import React from "react";
import { ModalContainer, ModalContent } from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal: React.FC<ModalProps> = (props) => {
  const { children } = props;

  return (
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
