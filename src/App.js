import { IconButton } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { FastfoodRounded } from "@material-ui/icons";
import useButton from "./useButton";

const App = () => {
  const [buttonColor, changeColor] = useButton();

  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item>
        <IconButton>
          <FastfoodRounded
            fontSize="large"
            onClick={changeColor}
            style={{ color: buttonColor }}
          ></FastfoodRounded>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default App;
