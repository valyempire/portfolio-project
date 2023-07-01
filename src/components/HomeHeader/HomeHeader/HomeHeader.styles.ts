import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#213555",
  color: "azure",
  padding: theme.spacing(4),
}));

export const AboutContainer = styled(Grid)({
  textAlign: "center",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: 35,
}));

export const Image = styled("img")(({ theme }) => ({
  width: 605,
  height: 323,
  borderRadius: "60%",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  marginBottom: theme.spacing(4),
}));

export const HomeContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
    padding: theme.spacing(2),
  },
}));
