import { useState } from "react";
import styled from "styled-components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Grid, IconButton } from "@material-ui/core";

import { DogFood, DogWalk, Water, Fullscreen } from "./svgs";

import { MainButton } from "./components";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: auto 0;
`;

const App = () => {
  const handle = useFullScreenHandle();
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Wrapper>
      <IconButton onClick={handle.enter}>
        <Fullscreen style={{ color: "white", width: "7em", height: "7em" }} />
      </IconButton>

      <FullScreen handle={handle} onChange={(state) => setIsFullscreen(state)}>
        {isFullscreen && (
          <Grid
            container
            direction="column"
            justify="space-evenly"
            style={{ height: "100%", backgroundColor: "black" }}
          >
            <MainButton resetTimes={[{ hour: 2 }, { hour: 14 }]}>
              <DogFood />
            </MainButton>

            <MainButton resetTimes={[{ hour: 2 }]}>
              <Water />
            </MainButton>

            <MainButton resetTimes={[{ hour: 2 }]}>
              <DogWalk />
            </MainButton>
          </Grid>
        )}
      </FullScreen>
    </Wrapper>
  );
};

export default App;
