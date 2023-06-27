import { styled } from "@mui/system";

export const PageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#4F709C",
});

export const ContactFormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#4F709C;",
  padding: "20px",
  borderRadius: "30px",
  marginBottom: "20px",
  border: "1px solid #f1f1f1",
});

export const Title = styled("h2")({
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "azure",
});

export const Input = styled("input")({
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "4px",
  fontSize: "16px",
  backgroundColor: "#FFFFFF",
  border: "none",
});

export const Textarea = styled("textarea")({
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "4px",
  fontSize: "16px",
  minHeight: "100px",
  resize: "vertical",
  backgroundColor: "#FFFFFF",
  border: "none",
});

export const SubmitButton = styled("button")({
  padding: "10px 20px",
  backgroundColor: "#FFFFFF",
  color: "#3c416d",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#213555",
    color: "#FFFFFF",
  },
});

export const ContactInfo = styled("div")({
  textAlign: "center",
  color: "#FFFFFF",
  "& p": {
    margin: "10px 0",
    fontSize: 20,
  },
});
