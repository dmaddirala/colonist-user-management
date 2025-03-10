/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  others: {
    white: "white",
    black: "black",
    black100: "rgb(12, 17, 26)",
    gray100: "rgb(249, 250, 252)",
    gray200: "rgb(235, 236, 238)",
    gray300: "rgb(123, 130, 136)",
    blue50: "rgb(241, 245, 254)",
    blue100: "rgb(236, 245, 254)",
    blue400: "rgb(67, 126, 246)",
    blue600: "rgb(42, 128, 247)",
    blue700: "rgb(11, 57, 202)",
    purple100: "rgb(248, 244, 254)",
    purple300: "rgb(152, 91, 246)",
    red500: "rgb(244, 67, 54)"
  }
};
