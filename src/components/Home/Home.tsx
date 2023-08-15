/**
 * Imports components
 */
import { HomeHeader } from "../HomeHeader";
import { HomeDescription } from "../HomeDescription";
import { HomeSkills } from "../HomeSkills";

/**
 * Imports Material UI components
 */
import { Grid } from "@mui/material";

/**
 * Displays the component
 */
export const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <HomeHeader />
      </Grid>
      <Grid item>
        <HomeDescription />
      </Grid>
      <Grid item>
        <HomeSkills />
      </Grid>
    </Grid>
  );
};
