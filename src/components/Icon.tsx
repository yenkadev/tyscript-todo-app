import React from "react";
import iconSet from "./../icomoon.json";
import IcoMoon, { IconProps } from "react-icomoon";

const Icon = (props: IconProps) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
