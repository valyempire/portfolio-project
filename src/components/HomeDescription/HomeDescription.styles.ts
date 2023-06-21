import { styled } from "@mui/system";

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

export const Content = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
}));

export const LeftContent = styled("div")(() => ({
  marginRight: "10px",
}));

export const RightContent = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
}));

export const Image = styled("img")(() => ({
  width: 625,
  height: 381,
}));

export const Text = styled("div")(() => ({
  fontSize: 25,
}));
