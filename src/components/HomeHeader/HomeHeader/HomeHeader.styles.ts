import { styled } from "@mui/system";

export const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#3c416d",
  color: "azure",
}));

export const AboutContainer = styled("div")(() => ({
  textAlign: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Title = styled("h3")(() => ({
  textAlign: "center",
  marginBottom: "1rem",
  fontSize: 35,
}));

export const Image = styled("img")(() => ({
  width: 386,
  height: 327,
  borderRadius: "15%",
  marginBottom: "1rem",
}));

export const Description = styled("p")(() => ({
  textAlign: "center",
  fontSize: 25,
}));

export const HomeContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));