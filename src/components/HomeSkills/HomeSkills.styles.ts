import { styled } from "@mui/system";

export const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#F5EFE7",
  maxWidth: "100%",
}));

export const Title = styled("h2")(({ theme }) => {
  return {
    textAlign: "center",
    marginBottom: 50,
    marginTop: 35,
    maxWidth: 812,
    fontWeight: 200,
    fontSize: 27,
    [theme.breakpoints.down("md")]: {
      marginRight: 64,
      marginLeft: 64,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 4,
      marginLeft: 4,
      maxWidth: 260,
    },
  };
});

export const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  // width: "70%",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    maxWidth: 273,
  },
}));

export const Card = styled("div")({
  flex: "0 1 300px",
  padding: "1rem",
  borderRadius: "30px",
});

export const CardHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: 57,
});

export const Logo = styled("img")(({ theme }) => ({
  width: 50,
  marginRight: 10,
  [theme.breakpoints.down("sm")]: {
    marginRight: 6,
    marginLeft: -25,
  },
}));

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
  marginBottom: 15,
  marginLeft: 20,
  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
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
  fontWeight: 200,
});

export const BottomText = styled("h4")({
  marginBottom: "1rem",
  fontSize: 24,
  fontWeight: 200,
});

export const Button = styled("button")(({ theme }) => {
  return {
    padding: "16px 32px",
    backgroundColor: "#213555",
    color: "#fff",
    border: "none",
    borderRadius: 15,
    cursor: "pointer",
    fontSize: 15,
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#316ab6",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
  };
});
