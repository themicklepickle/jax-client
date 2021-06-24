import { Grid } from "@material-ui/core";
import { FastfoodRounded, LocalDrinkRounded } from "@material-ui/icons";

import MainButton from "./components/MainButton";

const App = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item>
        <MainButton
          resetTimes={[
            { hour: 2, minutes: 0 },
            { hour: 14, minutes: 0 },
          ]}
        >
          <FastfoodRounded />
        </MainButton>
      </Grid>
      <Grid item>
        <MainButton resetTimes={[{ hour: 2, minutes: 0 }]}>
          <LocalDrinkRounded />
        </MainButton>
      </Grid>
    </Grid>
  );
};

export default App;
