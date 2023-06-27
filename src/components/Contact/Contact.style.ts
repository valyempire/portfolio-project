import { styled } from "@mui/system";

export const PageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "85vh",
  backgroundColor: "#213555",
});

export const ContactFormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#F5EFE7;",
  padding: "20px",
  borderRadius: "30px",
  marginBottom: "40px",
  border: "1px solid #f1f1f1",
  marginTop: 40,
});

export const Title = styled("h2")({
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "dark",
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
  backgroundColor: "#4F709C",
  color: "azure",
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
