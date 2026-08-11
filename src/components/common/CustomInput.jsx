import { TextField } from "@mui/material";

const CustomInput = ({...props}) => {
    return (<TextField 
    fullWidth
    margin="normal"
    variant="outlined"
    {...props}/>
    );
}

export default CustomInput;