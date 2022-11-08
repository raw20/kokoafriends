import { DefaultTheme } from "styled-components";

const size = {
  mobile: "768px",
  tablet: "1280px",
  desktop: "1700px",
};

export const theme: DefaultTheme = {
  bgColor: "#ffffff",
  textColor: "#333333",
  seconetTextColor: "#aeaeaf",
  secondColor: "#999999",
  accentColor: " #513B1C",
  boxColor: "  #dfd8d7",
  borderColor: "#EDE5E3",
  secondBorderColor: "#f7f7f7",
  cartColor: "#ff447f",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};
