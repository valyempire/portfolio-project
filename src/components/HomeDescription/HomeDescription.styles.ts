// import { styled } from "@mui/system";

// export const Container = styled("div")(() => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   backgroundColor: "#3c416d",
//   color: "azure",
// }));

// export const Content = styled("div")(() => ({
//   display: "flex",
//   alignItems: "center",
//   marginBottom: "20px",
// }));

// export const LeftContent = styled("div")(() => ({
//   marginRight: "10px",
// }));

// export const RightContent = styled("div")(() => ({
//   display: "flex",
//   flexGrow: 1,
// }));

// export const Image = styled("img")(() => ({
//   width: 625,
//   height: 338,
// }));

// export const Text = styled("div")(() => ({
//   fontSize: 23,
// }));

// import { Box } from "@mui/system";
// import { styled } from "@mui/material/styles";

// export const Container = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   backgroundColor: "#3c416d",
//   color: "azure",
//   padding: "20px",

//   [theme.breakpoints.down("md")]: {
//     padding: "10px",
//   },
// }));

// export const Content = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   marginBottom: "20px",

//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//   },
// }));

// export const LeftContent = styled(Box)(({ theme }) => ({
//   marginRight: "10px",

//   [theme.breakpoints.down("md")]: {
//     marginRight: 0,
//     marginBottom: "10px",
//   },
// }));

// export const RightContent = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexGrow: 1,

//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//   },
// }));

// export const Image = styled("img")(() => ({
//   width: 625,
//   height: 338,

//   "@media (max-width: 768px)": {
//     width: "100%",
//     height: "auto",
//   },
// }));

// export const Text = styled("div")(() => ({
//   fontSize: 23,

//   "@media (max-width: 768px)": {
//     fontSize: 18,
//   },
// }));
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
  padding: "20px",

  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  marginRight: "10px",

  [theme.breakpoints.down("md")]: {
    marginRight: 0,
    marginBottom: "10px",
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
