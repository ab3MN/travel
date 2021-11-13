import React from "react";
import "./Button.css";
import T from "prop-types";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({
  children,
  type = "Button",
  buttonStyle = "",
  buttonSize = "",
  onClick,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: T.node.isRequired,
  type: T.string.isRequired,
  buttonStyle: T.string,
  buttonSize: T.string,
};

export default Button;
