// SlideButton.js

import React from "react";
import Button from "../Button/Button";

const SlideButton = ({ button }) => {
  return (
    <Button to={button.link} className={button.style}>
      {button.text}
    </Button>
  );
};

export default SlideButton;
