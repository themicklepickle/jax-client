import { useState, useEffect } from "react";

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(
    window.screen.orientation?.type
  );

  useEffect(() => {
    window.screen.orientation.onchange = () => {
      setOrientation(window.screen.orientation.type);
    };
  }, []);

  return orientation;
};

export default useScreenOrientation;
