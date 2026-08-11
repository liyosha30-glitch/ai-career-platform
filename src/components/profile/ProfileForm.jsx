import {
    TextField,
    Button,
    Box,
    Avatar
} from "@mui/material";
import useProfileForm from "../../hooks/useProfileForm";
import { useAuth } from "../../context/AuthContext";


const ProfileForm = () => {
    const {user} = useAuth();
    console.log(user.image);

    const { register, handleSubmit, errors, isSubmitting } = useProfileForm();

    const submitHandler = async (data) => {
        console.log("Profile Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Profile saved");
    };


    return (
        <>
            <Box
                component="form"
                onSubmit={
                    handleSubmit(submitHandler)
                }
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    maxWidth: 500,
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 4
                }}
            >


                <TextField
                    label="Full Name"
                    fullWidth
                    {...register("fullName")}

                    error={
                        Boolean(errors.fullName)
                    }

                    helperText={
                        errors.fullName?.message
                    }
                />


                <TextField
                    label="Email"
                    fullWidth
                    {...register("email")}
                    InputProps={{
                        readOnly: true
                    }}
                />


                <TextField
                    label="Phone"
                    fullWidth
                    {...register("phone")}
                    error={
                        Boolean(errors.phone)
                    }
                    helperText={
                        errors.phone?.message
                    }
                />


                <TextField
                    label="Experience"
                    fullWidth
                    type="number"
                    {...register("experience")}
                    error={
                        Boolean(errors.experience)
                    }
                    helperText={
                        errors.experience?.message
                    }
                />


                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Saving..." : "Save Profile"}
                </Button>


            </Box>
        </>

    );


};


export default ProfileForm;