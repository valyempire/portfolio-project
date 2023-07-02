import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#d8c4b6",
  padding: theme.spacing(4),
  marginBottom: 0,
}));

export const TopSection = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginTop: theme.spacing(4),
  },
}));

export const TextWrapper = styled("div")(() => ({
  flex: 1,
  textAlign: "left",
}));

export const Image = styled("img")(({ theme }) => ({
  height: 337,
  width: 545,
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Icon = styled(FontAwesomeIcon)(() => ({
  color: "#213555",
  height: 40,
}));

export const Text = styled("h2")(() => ({
  maxWidth: 510,
  marginTop: 32,
  fontSize: 25,
}));

export const Button = styled("button")(({ theme }) => ({
  padding: theme.spacing(2, 4),
  backgroundColor: "#213555",
  color: "#fefefe",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  marginLeft: theme.spacing(4),
  "&:hover": {
    backgroundColor: "#F5EFE7",
    color: "black",
  },
}));

export const CardGroup = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // flexWrap: "wrap",
}));

export const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: theme.spacing(2),
  padding: theme.spacing(4),
  backgroundColor: "#D8C4B6",
  borderRadius: 30,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  width: "65%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  transition: "transform 0.3s, background-color 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#F5EFE7",
  },
}));

export const CardImage = styled("div")(() => ({
  marginRight: 8,
}));

export const CardContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 0,
}));

export const CardImageWrapper = styled("img")(() => ({
  width: "100%",
  height: "auto",
}));

export const CardContent = styled("div")(() => ({
  flex: 1,
}));

export const CardTitle = styled("h3")(({ theme }) => ({
  fontSize: 20,
  marginBottom: theme.spacing(2),
}));

export const CardDescription = styled("p")(() => ({
  fontSize: 25,
  maxWidth: 490,
}));
