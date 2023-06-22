import { HomeHeader } from "../HomeHeader/HomeHeader";
import { HomeDescription } from "../HomeDescription/HomeDescription";
import { HomeSkills } from "../HomeSkills";
import { Grid } from "@mui/material";

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
