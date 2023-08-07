/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the FooterContainer
 */
export const FooterContainer = styled("footer")(() => {
  return {
    padding: "1rem",
    textAlign: "center",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0c2e5c",
    color: "azure",
    marginTop: -20,
    fontSize: 18,
  };
});

/**
 * Styles the Title
 */
export const Title = styled("h3")(() => {
  return {
    marginBottom: "1rem",
  };
});

/**
 * Styles the LinkContainer
 */
export const LinkContainer = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  };
});

/**
 * Styles the Link
 */
export const Link = styled("a")(() => {
  return {
    color: "#ffffff",
    textDecoration: "none",
    transition: "color 0.3s",
    fontSize: 25,
    "&:hover": {
      color: "#888888",
    },
  };
});

/**
 * Styles the Text
 */
export const Text = styled("h4")(() => {
  return {
    fontSize: 17,
  };
});
