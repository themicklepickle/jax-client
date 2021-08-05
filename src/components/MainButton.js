import { Grid, IconButton } from "@material-ui/core";
import { cloneElement } from "react";

import { useButton, useReset } from "../hooks";

const MainButton = ({ resetTimes, children }) => {
  const [iconColor, changeIconColor, resetIconColor] = useButton();
  useReset(resetIconColor, resetTimes);

  return (
    <Grid item>
      <IconButton
        onClick={changeIconColor}
        style={{ width: "7em", height: "7em" }}
      >
        {cloneElement(children, {
          style: { color: iconColor, transform: "rotate(270deg)" },
        })}
      </IconButton>
    </Grid>
  );
};

export default MainButton;
