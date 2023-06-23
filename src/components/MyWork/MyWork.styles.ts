import { Box, styled } from "@mui/system";
import Slider from "react-slick";
import { Typography } from "@mui/material";

export const CarouselContainer = styled(Box)(() => ({
  padding: "3rem",
  backgroundColor: "#3c416d",
  color: "azure",
  minHeight: 500,
}));

export const Header = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 30,
  marginBottom: theme.spacing(2),
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 21,
  marginBottom: theme.spacing(2),
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  color: "azure",
  height: 400,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  outline: "none",
  boxShadow: "none",
}));

export const Title = styled(Typography)(() => ({
  textAlign: "center",
  color: "azure",
  marginBottom: 10,
}));

export const Image = styled("img")(() => ({
  height: "69%",
  width: "94%",
}));

export const LinkContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(1),
}));

export const LinkItem = styled("div")(({ theme }) => ({
  margin: `0 ${theme.spacing(1)}`,
}));

export const LinkDescription = styled("a")(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(2),
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

export const CloseButton = styled("button")(({ theme }) => ({
  backgroundColor: "#ccc",
  border: "none",
  padding: theme.spacing(1, 2),
  borderRadius: 4,
  marginTop: theme.spacing(1),
  cursor: "pointer",
  alignSelf: "flex-end",
}));

export const Description = styled(Typography)(() => ({
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
