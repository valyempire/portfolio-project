import { styled } from "@mui/system";

export const SkillsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#3c416d",
  color: "azure",
  marginBottom: 20,
});

export const Description = styled("h2")(({ theme }) => ({
  textAlign: "center",
  width: "80%",
  marginBottom: 20,
  [theme.breakpoints.down("md")]: {
    marginTop: 50,
  },
}));

export const CategoriesContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: 50,
  flexWrap: "wrap",
});

export const CategoryContainer = styled("div")(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  border: "1px solid #ccc",
  padding: 79,
  margin: 17,
  backgroundColor: "#3c416d",
  color: "azure",
  borderRadius: 75,
  fontSize: 30,
  whiteSpace: "nowrap",
  [theme.breakpoints.down("md")]: {
    flexBasis: "100%",
  },
}));

export const SkillsList = styled("ul")({
  listStyleType: "none",
  padding: 0,
  margin: "10px 0",
});

export const SkillItem = styled("li")({
  marginBottom: 10,
  color: "azure",
});
