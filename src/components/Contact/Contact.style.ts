/**
 * Imports styled
 */
import { styled } from "@mui/system";

export const PageContainer = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", //
    alignItems: "center",
    // height: "75vh",
    // minHeight: "100vh",
    minHeight: "63vh",
    backgroundColor: "#3c416d",
    paddingTop: "103px",
  };
});

export const ContentContainer = styled("div")(({ theme }) => {
  return {
    margin: theme.spacing(2),
    alignSelf: "center",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
    },
  };
});

export const Title = styled("h2")(() => {
  return {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 33,
    color: "azure",
  };
});

export const Paragraph = styled("p")(() => {
  return {
    fontSize: 23,
    color: "azure",
    // marginLeft: 36,
    marginBottom: 10,
  };
});

export const ContactFormContainer = styled("form")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      marginTop: theme.spacing(4),
    },
  };
});

export const Textarea = styled("textarea")(({ theme }) => {
  return {
    padding: 10,
    margin: "0 5px",
    borderRadius: 4,
    fontSize: 14,
    minHeight: 40,
    resize: "vertical",
    marginBottom: theme.spacing(2),
    height: 186,
    width: 496,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  };
});

export const SubmitButton = styled("button")(() => ({
  padding: "10px 20px",
  backgroundColor: "#fefefe",
  color: "#3c416d",
  border: "none",
  borderRadius: 4,
  fontSize: 16,
  cursor: "pointer",
  marginLeft: 6,
  "&:hover": {
    backgroundColor: "#FFD75E",
    color: "#3c416d",
    border: "1px solid white",
  },
}));

export const Input = styled("input")(({ theme }) => {
  return {
    padding: 10,
    margin: "0 5px",
    borderRadius: 4,
    fontSize: 19,
    height: 40,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  };
});

export const Container = styled("div")(() => ({
  display: "flex",
  marginBottom: 20,
}));
