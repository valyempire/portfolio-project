import { styled } from "@mui/system";

export const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#F5EFE7",
  maxWidth: "100%",
}));

export const Title = styled("h1")({
  textAlign: "center",
  marginBottom: 50,
  marginTop: 35,
  maxWidth: 812,
});

export const CardContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "70%",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "1rem",
});

export const Card = styled("div")({
  flex: "0 1 300px",
  padding: "1rem",
  borderRadius: "30px",
});

export const CardTitle = styled("h3")({
  textAlign: "center",
  marginBottom: "1rem",
  fontSize: 30,
});

export const CardText = styled("p")({
  textAlign: "center",
  fontSize: 23,
});

export const ImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
});

export const Image = styled("img")({
  width: 80,
  transition: "transform 0.3s",
  marginBottom: 10,
  marginLeft: 20,
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const TextContainer = styled("div")({
  textAlign: "center",
  margin: "2rem",
  fontSize: 24,
});

export const BottomTitle = styled("h3")({
  marginBottom: "1rem",
  fontSize: 25,
});

export const BottomText = styled("h4")({
  marginBottom: "1rem",
  fontSize: 24,
});

export const Button = styled("button")({
  padding: "16px 32px",
  backgroundColor: "#213555",
  color: "#fff",
  border: "none",
  borderRadius: 15,
  cursor: "pointer",
  fontSize: 15,
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#1b2a3a",
  },
});
