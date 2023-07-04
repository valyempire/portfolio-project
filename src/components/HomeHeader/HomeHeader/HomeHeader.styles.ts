import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export const HomeContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#316ab6",
  color: "azure",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
    padding: theme.spacing(2),
  },
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
