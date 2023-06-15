import { Box, styled } from "@mui/system";

export const CarouselContainer = styled(Box)(() => ({
  padding: "5rem",
  backgroundColor: "#3c416d",
  color: "azure",
  height: 532,
}));

export const StyledBox = styled(Box)(() => ({
  position: "relative",
  color: "azure",
  height: "400px",
  width: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  outline: "none",
  boxShadow: "none",
}));

export const Title = styled("h3")(() => ({
  textAlign: "center",
  marginBottom: "1rem",
}));

export const Image = styled("img")(() => ({
  height: "69%",
  width: "94%",
}));

export const LinkContainer = styled("div")(() => ({
  position: "absolute",
  bottom: "50px",
  left: "10px",
  right: "10px",
  display: "flex",
  justifyContent: "center",
  marginTop: 10,
}));

export const LinkItem = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const Link = styled("a")(() => ({
  color: "white",
  textDecoration: "none",
  marginLeft: "10px",
  marginRight: 25,
  ":first-child": {
    marginLeft: 0,
  },
}));
