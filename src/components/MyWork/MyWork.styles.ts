import { Box, styled } from "@mui/system";
import Slider from "react-slick";

export const CarouselContainer = styled(Box)(() => ({
  padding: "3rem",
  backgroundColor: "#3c416d",
  color: "azure",
  height: 500,
}));

export const StyledBox = styled(Box)(() => ({
  position: "relative",
  color: "azure",
  height: 400,
  width: 600,
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
  color: "azure",
}));

export const Image = styled("img")(() => ({
  height: "69%",
  width: "94%",
}));

export const LinkContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
}));

export const LinkItem = styled("div")(() => ({
  margin: "0 0.5rem",
}));

export const Link = styled("a")(() => ({
  color: "white",
  textDecoration: "none",
  marginLeft: 10,
  marginRight: 25,
  ":first-child": {
    marginLeft: 0,
  },
}));

export const ModalImage = styled("img")(() => ({
  display: "block",
  margin: "0 auto",
  maxHeight: "100%",
  maxWidth: "100%",
}));

export const CloseButton = styled("button")(() => ({
  backgroundColor: "#ccc",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: 4,
  marginTop: "1rem",
  cursor: "pointer",
  alignSelf: "flex-end",
}));

export const Description = styled("p")(() => ({
  textAlign: "center",
  color: "azure",
}));

export const SliderStyle = styled(Slider)(() => ({
  ".slick-dots": {
    bottom: 20,
  },
  ".slick-dots li button:before": {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 10,
  },
  ".slick-dots li.slick-active button:before": {
    color: "rgba(255, 255, 255, 0.9)",
  },
  ".slick-prev:before, .slick-next:before": {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 30,
  },
  ".slick-prev:hover:before, .slick-next:hover:before": {
    color: "rgba(255, 255, 255, 0.9)",
  },
}));
