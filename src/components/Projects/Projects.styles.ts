import { styled } from "@mui/system";

export const Container = styled("div")(() => ({
  backgroundColor: "aquamarine",
}));

export const Card = styled("div")(() => ({
  display: "flex",
  width: "65%",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  marginLeft: "200px",
  backgroundColor: "aqua",
  marginTop: "30px",
  marginBottom: "30px",
}));

export const Left = styled("div")(() => ({
  width: "50%",
}));

export const Right = styled("div")(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingLeft: "16px",
}));

export const Image = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
}));

export const Title = styled("h2")(() => ({
  textAlign: "center",
}));

export const Description = styled("p")(() => ({
  fontSize: "20px",
}));

export const Links = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "16px",
}));

export const Link = styled("a")(() => ({
  textDecoration: "none",
  color: "#000",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
}));

export const IconContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
}));

export const Icon = styled("img")(() => ({
  width: "24px",
  height: "24px",
  marginRight: "8px",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));
