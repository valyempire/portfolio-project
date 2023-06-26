import { styled } from "@mui/system";

export const FooterContainer = styled("footer")(() => {
  return {
    padding: "1rem",
    textAlign: "center",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#213555",
    color: "azure",
    marginTop: -20,
    fontSize: 18,
  };
});

export const Title = styled("h3")(() => {
  return {
    marginBottom: "1rem",
  };
});

export const LinkContainer = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  };
});

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

export const Text = styled("h4")(() => {
  return {
    fontSize: 17,
  };
});
