import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { cloneElement } from "react";

import useButton from "./useMainButton";
import useReset from "../hooks/useReset";

const styles = (theme) => ({
  largeButton: {
    padding: 50,
  },
  largeIcon: {
    fontSize: 100,
  },
});

const MainButton = (props) => {
  const { classes } = props;

  const [iconColor, changeIconColor, resetIconColor] = useButton();
  useReset(resetIconColor, props.resetTimes);

  return (
    <IconButton onClick={changeIconColor} className={classes.largeButton}>
      {cloneElement(props.children, {
        style: { color: iconColor },
        className: classes.largeIcon,
      })}
    </IconButton>
  );
};

export default withStyles(styles)(MainButton);