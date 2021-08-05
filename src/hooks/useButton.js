import { useState } from "react";
import { green, red } from "@material-ui/core/colors";

const useButton = () => {
  const colors = {
    off: red[300],
    on: green[300],
  };

  const [buttonColor, setButtonColor] = useState(colors.off);

  const changeColor = () => {
    const newColor = buttonColor === colors.off ? colors.on : colors.off;

    setButtonColor(newColor);
  };

  const resetColor = () => {
    setButtonColor(colors.off);
  };

  return [buttonColor, changeColor, resetColor];
};

export default useButton;
