import { styled } from "@mui/system";

export const Card = styled("div")(() => ({
  display: "flex",
  width: "65%",
  border: "1px solid #ccc",
  borderRadius: "35px",
  padding: "16px",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#F5EFE7",
  marginTop: "30px",
  marginBottom: 50,
  fontSize: 21,
  "@media (max-width: 768px)": {
    flexDirection: "column",
    width: "80%",
  },
}));

export const Left = styled("div")(() => ({
  width: "50%",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 768px)": {
    width: "100%",
  },
}));

export const Right = styled("div")(() => ({
  width: "50%",
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

export const Image = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
  marginTop: 20,
}));

export const Title = styled("h2")(() => ({
  textAlign: "center",
}));

export const Description = styled("p")(() => ({
  fontSize: 22,
  maxWidth: 490,
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
  borderRadius: "4px",
  marginLeft: 60,
  marginRight: 60,
  fontSize: 21,
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
  width: "24px",
  height: "24px",
  marginRight: "25px",
  "&:hover": {
    transform: "scale(1.3)",
  },
}));
