/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Contact Form
 */
export const ContactForm = styled("form")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    margin: "0 auto",
  };
});

/**
 * Styles the Contact Input
 */
export const ContactInput = styled("input")(({ theme }) => {
  return {
    marginBottom: theme.spacing(2),
  };
});

/**
 * Styles the Submit Button
 */
export const SubmitButton = styled("button")(() => {
  return {
    backgroundColor: "#007cb9",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#005689",
    },
  };
});
