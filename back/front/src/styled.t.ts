import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    secondColor: string;
    seconetTextColor: string;
    accentColor: string;
    boxColor: string;
    borderColor: string;
    secondBorderColor: string;
    cartColor: string;
    mobile: string;
    tablet: string;
    desktop: string;
  }
}
