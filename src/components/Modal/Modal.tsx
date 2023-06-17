import React from "react";
import { ModalContainer, ModalContent } from "./Modal.styles";

interface ModalProps {
  onCloseModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
