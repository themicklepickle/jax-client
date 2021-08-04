import { FastfoodRounded, LocalDrinkRounded } from "@material-ui/icons";
import "./App.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import MainButton from "./components/MainButton";
import { Button } from "@material-ui/core";

const App = () => {
  const handle = useFullScreenHandle();

  return (
    <div className="wrapper">
      <Button onClick={handle.enter}>Enter fullscreen</Button>

      <FullScreen handle={handle}>
        <div className="icon">
          <MainButton
            resetTimes={[
              { hour: 2, minutes: 0 },
              { hour: 14, minutes: 0 },
            ]}
          >
            <FastfoodRounded />
          </MainButton>
        </div>
        <div className="icon">
          <MainButton resetTimes={[{ hour: 2, minutes: 0 }]}>
            <LocalDrinkRounded />
          </MainButton>
        </div>
      </FullScreen>
    </div>
  );
};

export default App;
