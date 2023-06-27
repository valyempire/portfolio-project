import { styled } from "@mui/system";

export const Container = styled("div")(() => ({
  backgroundColor: "#4F709C",
}));

export const Card = styled("div")(() => ({
  display: "flex",
  width: "65%",
  border: "1px solid #ccc",
  borderRadius: "35px",
  padding: "16px",
  marginLeft: "200px",
  backgroundColor: "#F5EFE7",
  marginTop: "30px",
  marginBottom: "30px",
}));

export const Left = styled("div")(() => ({
  width: "50%",
  justifyContent: "center", // Centrarea imaginii pe orizontală
  alignItems: "center", // Centrarea imaginii pe verticală
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
  objectFit: "cover", // Imaginea va fi scalată pentru a ocupa întreg spațiul disponibil
  marginTop: 20,
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
  marginLeft: 60,
  marginRight: 60,
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
    transform: "scale(1.2)",
  },
}));
