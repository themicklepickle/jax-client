import { useState } from "react";
import { green, red } from "@material-ui/core/colors";

const useButton = () => {
  const [buttonColor, setButtonColor] = useState(red[500]);

  const changeColor = () => {
    const newColor = buttonColor === red[500] ? green[500] : red[500];

    setButtonColor(newColor);
  };

  return [buttonColor, changeColor];
};

export default useButton;
