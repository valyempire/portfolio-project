import { styled } from "@mui/system";

// export const Card = styled("div")(() => ({
//   display: "flex",
//   width: "65%",
//   border: "1px solid #ccc",
//   borderRadius: "35px",
//   padding: "16px",
//   marginLeft: "auto",
//   marginRight: "auto",
//   backgroundColor: "#F5EFE7",
//   marginTop: "30px",
//   marginBottom: 50,
//   fontSize: 21,
//   "@media (max-width: 768px)": {
//     flexDirection: "column",
//     width: "80%",
//   },
// }));

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

export const LeftContetnt = styled("div")(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const RightContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingLeft: "16px",
  "@media (max-width: 768px)": {
    width: "100%",
    paddingLeft: "0",
    paddingTop: "16px",
  },
}));

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

export const Title = styled("h2")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
    marginBottom: 0,
  },
}));

export const Description = styled("p")(({ theme }) => ({
  fontSize: 22,
  maxWidth: 490,
  marginLeft: 10,
  [theme.breakpoints.down("md")]: {
    maxWidth: 436,
    // width: "100%",
  },
}));

export const Links = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 10,
}));

export const Link = styled("a")(() => ({
  textDecoration: "none",
  color: "#000",
  padding: "8px",
  // borderRadius: "4px",
  marginLeft: "8px",
  marginRight: "8px",

  "&:hover": {
    transform: "scale(1.3)",
  },
  "@media (max-width: 768px)": {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export const IconContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
}));

export const Icon = styled("img")(() => ({
  width: 29,
  height: 29,
  marginRight: 25,
  "&:hover": {
    transform: "scale(1.3)",
  },
}));
