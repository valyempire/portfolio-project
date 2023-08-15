/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Card
 */
export const Card = styled("div")(({ theme }) => ({
  display: "flex",
  width: "57%",
  border: "1px solid #ccc",
  borderRadius: "35px",
  padding: "16px",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#F5EFE7",
  marginTop: "30px",
  marginBottom: 50,
  fontSize: 21,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    maxWidth: 525,
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "78%",
    alignItems: "center",
  },
}));

/**
 * Styles the LeftContetnt
 */
export const LeftContetnt = styled("div")(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

/**
 * Styles the RightContent
 */
export const RightContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingLeft: "16px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    paddingLeft: "0",
    paddingTop: "16px",
  },
}));

/**
 * Styles the Image
 */
export const Image = styled("img")(({ theme }) => ({
  width: 318,
  height: 217,
  borderRadius: "8px",
  objectFit: "cover",
  marginBottom: 20,
  marginLeft: 5,
  marginTop: 100,
  [theme.breakpoints.down("md")]: {
    marginLeft: 64,
    marginTop: 5,
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 21,
    width: 210,
    height: 126,
    marginTop: 2,
    marginBottom: 0,
  },
}));

/**
 * Styles the Title
 */
export const Title = styled("h2")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
    marginBottom: 0,
  },
}));

/**
 * Styles the Description
 */
export const Description = styled("p")(({ theme }) => ({
  fontSize: 22,
  maxWidth: 490,
  marginLeft: 10,
  [theme.breakpoints.down("md")]: {
    maxWidth: 436,
  },
}));

/**
 * Styles the Links
 */
export const LinksContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 10,
}));

/**
 * Styles the Link
 */
export const Link = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: "#000",
  padding: "8px",
  marginLeft: "8px",
  marginRight: "8px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.3)",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

/**
 * Styles the IconContainer
 */
export const IconContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
}));

/**
 * Styles the Icon
 */
export const Icon = styled("img")(() => ({
  width: 29,
  height: 29,
  marginRight: 25,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.3)",
  },
}));
