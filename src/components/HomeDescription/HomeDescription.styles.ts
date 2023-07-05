import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  marginBottom: 0,
}));

export const TopSection = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
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

export const Text = styled("h2")(({ theme }) => ({
  maxWidth: 510,
  marginTop: 32,
  fontSize: 24,
  fontWeight: 300,
  marginLeft: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: 24,
    marginLeft: 0,
    marginRight: 0,
    maxWidth: 380,
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 19,
    maxWidth: 251,
  },
}));

export const Image = styled("img")(({ theme }) => ({
  height: 337,
  width: 545,
  [theme.breakpoints.down("md")]: {
    // width: "100%",
    height: 361,
    width: 516,
    marginLeft: -92,
  },
  [theme.breakpoints.down("sm")]: {
    width: 253,
    height: 165,
    marginLeft: 0,
  },
}));

export const Icon = styled(FontAwesomeIcon)(() => ({
  color: "#213555",
  height: 40,
}));

export const Button = styled("button")(({ theme }) => ({
  padding: theme.spacing(2, 4),
  backgroundColor: "#0c2e5c",
  color: "#fff",
  border: "none",
  borderRadius: 15,
  cursor: "pointer",
  marginLeft: 54,
  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: "#F5EFE7",
    color: "black",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 101,
    marginTop: 10,
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 32,
    marginTop: 10,
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
  backgroundColor: "#fff",
  borderRadius: 30,
  boxShadow: "0px 3px 17px 4px rgba(0, 0, 0, 0.1)",
  width: "65%",

  transition: "transform 0.3s, background-color 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    // backgroundColor: "#F5EFE7",
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
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
  fontSize: 20,
  maxWidth: 490,
}));
