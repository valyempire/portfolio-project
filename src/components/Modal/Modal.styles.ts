import { styled } from "@mui/system";

export const ModalContainer = styled("div")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

export const ModalContent = styled("div")(() => ({
  backgroundColor: "#3c416d",
  padding: "1rem",
  borderRadius: 4,
  width: 655,
  height: 535,
  fontSize: 20,
  overflow: "auto",
}));
