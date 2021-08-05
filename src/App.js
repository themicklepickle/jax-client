import styled from "styled-components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Button, Grid } from "@material-ui/core";

import { DogFood, DogWalk, Water } from "./svgs";

import { MainButton } from "./components";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: auto 0;
`;

const App = () => {
  const handle = useFullScreenHandle();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default App;
