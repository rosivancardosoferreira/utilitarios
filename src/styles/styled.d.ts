import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string,
    colors: {
        primary: string,
        secondary: string
   },
   fonts: {
      MuseoModernoBlack: string,
      MuseoModernoBold: string,
      MuseoModernoExtraBold: string,
      MuseoModernoExtraLight: string,
      MuseoModernoLight: string,
      MuseoModernoMedium: string,
      MuseoModernoRegular: string,
      MuseoModernoSemiBold: string,
      MuseoModernoThin: string
   }
  }
}
