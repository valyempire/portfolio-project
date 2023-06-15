/**
 * Imports styled
 */
import { styled } from "@mui/system";

export const PageContainer = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // minHeight: "100vh",
    backgroundColor: "#3c416d",
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
    marginRight: 85,
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
    marginLeft: 36,
  };
});

export const ContactFormContainer = styled("form")(() => {
  return {
    display: "flex",
    flexDirection: "column",
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

export const Input = styled("input")(() => {
  return {
    padding: 10,
    margin: "0 5px",
    borderRadius: 4,
    fontSize: 19,
    height: 20,
    width: 230,
  };
});

export const Container = styled("div")(() => ({
  display: "flex",
  marginBottom: 20,
}));
