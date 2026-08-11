import { createTheme } from "@mui/material";

const theme = createTheme ({
    palette: {
        primary: {
            main: "#5b5bd6",
        },
        secondary: {
            main: "#121212",
        },
        background: {
            default: "#f4f7fb",
        }
    },
    typography: {
        fontFamily: "Inter, sans-serif",
    },
    shape: {
        borderRadius: 12,
    }
});

export default theme;