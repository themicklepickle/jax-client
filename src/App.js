import { FastfoodRounded, LocalDrinkRounded } from "@material-ui/icons";
import "./App.css";

import MainButton from "./components/MainButton";

const App = () => {
  return (
    <div className="wrapper">
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
    </div>
  );
};

export default App;
