import { DefaultTheme } from "styled-components";

const size = {
  mobile: "768px",
  tablet: "1280px",
  desktop: "1700px",
};

export const theme: DefaultTheme = {
  bgColor: "#ffffff",
  textColor: "#000000",
  secondTextColor: "#616161",
  secondColor: "#ff447f",
  jaygColor: " #68510E",
  boxColor: "  #dfd8d7",
  borderColor: "#EDE5E3",
  muziColor: "#FCD800",
  apeachColor: "#F4D0D2",
  conColor: "#22933C",
  ryanColor: "#F9A531",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};
