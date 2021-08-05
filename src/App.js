import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "./App.css";
import { Button, Grid } from "@material-ui/core";

import { DogFood, DogWalk, Water } from "./svgs";

import { MainButton } from "./components";


const App = () => {
  const handle = useFullScreenHandle();

  return (
    <div className="wrapper">
      <Button onClick={handle.enter}>Enter fullscreen</Button>

      <FullScreen handle={handle}>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          style={{ height: "100%" }}
        >
          <MainButton
            resetTimes={[
              { hour: 2, minutes: 0 },
              { hour: 14, minutes: 0 },
            ]}
          >
            <DogFood />
          </MainButton>

          <MainButton resetTimes={[{ hour: 2, minutes: 0 }]}>
            <Water />
          </MainButton>

          <MainButton resetTimes={[{ hour: 2, minutes: 0 }]}>
            <DogWalk />
          </MainButton>
        </Grid>
      </FullScreen>
    </div>
  );
};

export default App;
