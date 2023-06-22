import { styled } from "@mui/system";

export const SkillsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#3c416d",
  color: "azure",
  marginBottom: 20,
  //   marginTop: 20,
});

export const Description = styled("h2")({
  textAlign: "center",
  marginBottom: "20px",
});

export const CategoriesContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  flexWrap: "wrap",
});

export const CategoryContainer = styled("div")(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  border: "1px solid #ccc",
  padding: "79px",
  margin: "17px",
  backgroundColor: "#3c416d",
  color: "azure",
  borderRadius: "75px",
  fontSize: "30px",
  [theme.breakpoints.down("md")]: {
    flexBasis: "auto",
  },
}));

export const SkillsList = styled("ul")({
  listStyleType: "none",
  padding: "0",
  margin: "10px 0",
});

export const SkillItem = styled("li")({
  marginBottom: "10px",
  color: "azure",
});
