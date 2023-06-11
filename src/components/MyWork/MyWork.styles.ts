import { styled } from "@mui/system";

interface WorkItemProps {
  backgroundImage: string;
}

export const WorkContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "2rem",
});

export const WorkItem = styled("div")({
  display: "flex",
  marginBottom: "2rem",
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  overflow: "hidden",
});

export const WorkImage = styled("div")<WorkItemProps>(
  ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "200px",
    height: "200px",
  })
);

export const WorkInfo = styled("div")({
  padding: "1rem",
});

export const WorkTitle = styled("span")({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

export const WorkButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});

export const WorkButton = styled("button")({
  padding: "0.5rem 1rem",
  marginLeft: "0.5rem",
  backgroundColor: "#007cb9",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#005689",
  },
});
