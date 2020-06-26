import { createMuiTheme } from "@material-ui/core/styles";

export const getThemeType = (color: string) =>
  parseInt(color.replace("#", ""), 16) > 0xffffff / 2 ? "light" : "dark";

const createTheme = (primary: string, secondary: string, background: string) =>
  createMuiTheme({
    typography: {
      fontFamily: "Roboto Slab",
    },
    palette: {
      type: "light",
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      error: {
        main: "#d61e1e",
      },
      background: {
        default: background,
      },
    },
    overrides: {
      MuiTypography: {
        h2: {
          fontFamily: "Basetica",
          fontSize: 33
        }
      },
      MuiButton: {
        root: {
          fontFamily: "Basetica",
          fontWeight: "normal",
          textTransform: "none",
        },
        contained: {
          fontSize: 16,
          height: 40,
        },
      },
      MuiListItemIcon: {
        root: {
          minWidth: 40,
        },
      },
    },
  });

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#d61e1e",
    },
    background: {
      default: "#fff",
    },
  },
});

export default createTheme;
