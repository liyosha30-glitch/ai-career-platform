import { Button } from "@mui/material";

const CustomButton = ({children, ...props}) => {
    return (<Button fullWidth
    variant="contained"
    size="large"
    sx={{
        mt: 2,
        py: 1.4,
        fontWeight: 400,
        textTransform: "none"
    }}
    {...props}
    >
        {children}
    </Button>);

}

export default CustomButton;