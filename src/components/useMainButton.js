import { useState } from "react";
import { green, red } from "@material-ui/core/colors";

const useMainButton = () => {
  const colors = {
    off: red[500],
    on: green[500],
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

export default useMainButton;
