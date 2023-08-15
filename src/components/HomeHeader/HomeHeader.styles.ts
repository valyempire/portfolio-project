/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports Material UI components
 */
import { Grid, Typography } from "@mui/material";

/**
 * Styles the HomeContainer
 */
export const HomeContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#0c2e5c",
  color: "azure",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
    padding: theme.spacing(2),
  },
}));

/**
 * Styles the AboutContainer
 */
export const AboutContainer = styled(Grid)({
  textAlign: "center",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

/**
 * Styles the Title
 */
export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: 35,
}));

/**
 * Styles the Image
 */
export const Image = styled("img")(({ theme }) => ({
  width: 670,
  height: 323,
  borderRadius: "60%",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

/**
 * Styles the Description
 */
export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  marginBottom: -70,
  [theme.breakpoints.down("md")]: {
    marginBottom: -100,
    width: "55%",
    marginTop: 60,
    fontSize: 36,
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: -80,
    width: "80%",
    marginTop: 30,
    fontSize: 25,
  },
}));
