import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#7048e8"
        },
        secondary: {
            main: "#17152b"
        },
        background: {
            default: "#faf9fd",
            paper: "#ffffff"
        },
        text: {
            primary: "#17152b",
            secondary: "#6d6980"
        }
    },
    typography: {
        fontFamily: "Inter, sans-serif",
        h4: {
            fontWeight: 800
        }
    },
    shape: {
        borderRadius: 12
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    textTransform: "none",
                    fontWeight: 650
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        }
    }
});

export default theme;
