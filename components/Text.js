import React from "react";
import { Text as TextNative } from "react-native";
import PropTypes from "prop-types";

const Text = (props) => {
  const { children, bold, style } = props;

  return (
    <TextNative
      {...props}
      style={{ fontFamily: bold ? "PoppinsBold" : "Poppins", ...style }}
    >
      {children}
    </TextNative>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  bold: PropTypes.bool,
  style: PropTypes.object
};

export default Text;
