import { createGlobalStyles } from "goober/global";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const theme = {
  colors: {
    background: "#ffeaea",
    border: "rgba(186, 21, 54, 0.4)",
    overlay: "rgba(186, 21, 54, 0.08)",
    overlayHover: "rgba(186, 21, 54, 0.16)",
    text: "#dc0a0a",
  },
  space: {
    a: 0.5,
    b: 1,
    c: 2,
    d: 3.5,
    e: 5,
  },
  maxWidth: "1350px",
};

export const GlobalStyles = createGlobalStyles({
  html: {
    boxSizing: "border-box",
    fontSize: "62.5%",
    fontFamily: inter.style.fontFamily,
    color: theme.colors.text,
    backgroundColor: theme.colors.background,
  },

  body: {
    margin: 0,
    padding: 0,
    fontSize: "15px",
    lineHeight: 1.5,
    overflowX: "hidden",
  },

  "*": {
    boxSizing: "inherit",
    fontFamily: "inherit",
  },

  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    border: 0,
    outline: 0,
    verticalAlign: "baseline",
    backgroundColor: "transparent",
  },

  a: {
    textDecoration: "none",
    color: "inherit",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  "@media (min-resolution: 192dpi)": {
    "*": {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  },

  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0 auto",
    maxWidth: theme.maxWidth,
    padding: `0 ${theme.space.b}rem`,
  },

  section: {
    paddingTop: `${theme.space.c}rem`,

    "&:first-of-type": {
      paddingTop: `${theme.space.d}rem`,
    },
    "&:last-of-type": {
      paddingBottom: `${theme.space.d}rem`,
    },
  },

  aside: {
    border: `0.1rem dashed ${theme.colors.border}`,
    backgroundColor: theme.colors.overlay,
    padding: `${theme.space.a}rem ${theme.space.b}rem`,
  },

  input: {
    border: `0.1rem dashed ${theme.colors.border}`,
    borderRadius: "0.5rem",
    padding: `${theme.space.a}rem ${theme.space.b}rem`,
    backgroundColor: theme.colors.overlay,
    color: theme.colors.text,

    "&:focus": {
      outline: "none",
      borderStyle: "solid",
    },
    "&:hover": {
      borderStyle: "solid",
    },

    "&:disabled": {
      backgroundColor: theme.colors.overlayHover,
    },
  },

  "::placeholder": {
    color: theme.colors.text,
    opacity: 0.6,
  },

  button: {
    border: `0.1rem dashed ${theme.colors.border}`,
    padding: `${theme.space.a / 2}rem ${theme.space.b}rem`,
    borderRadius: "0.25rem",
    backgroundColor: theme.colors.overlay,
    color: theme.colors.text,
    fontFamily: inter.style.fontFamily,
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "1.5rem",

    "&:focus": {
      outline: "none",
      borderStyle: "solid",
    },
    "&:hover": {
      borderStyle: "solid",
    },
    "&:disabled": {
      backgroundColor: theme.colors.overlayHover,
    },
  },

  textarea: {
    border: `0.1rem dashed ${theme.colors.border}`,
    borderRadius: "0.5rem",
    padding: `${theme.space.a}rem ${theme.space.b}rem`,
    backgroundColor: theme.colors.overlay,
    color: theme.colors.text,
    width: "100%",
    minHeight: "10rem",

    "&:focus": {
      outline: "none",
      borderStyle: "solid",
    },
    "&:hover": {
      borderStyle: "solid",
    },
    "&:disabled": {
      backgroundColor: theme.colors.overlayHover,
    },
  },
});
