import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#3c416d",
  color: "azure",
  padding: 20,

  [theme.breakpoints.down("md")]: {
    padding: 10,
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: 20,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  marginRight: 10,

  [theme.breakpoints.down("md")]: {
    marginRight: 0,
    marginBottom: 10,
  },
}));

export const RightContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: 625,
  height: 338,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

export const Text = styled("div")(({ theme }) => ({
  fontSize: 23,

  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));
