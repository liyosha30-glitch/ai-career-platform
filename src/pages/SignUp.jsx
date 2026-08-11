import { useState } from "react";
import CustomInput from "../components/common/CustomInput";
import CustomButton from "../components/common/CustomButton";
import { Box, Container, Paper, Typography } from "@mui/material";

const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: [e.target.value]
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(user);
    };
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Paper
                    elevation={6}
                    sx={{
                        p: 5,
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        mb={4}
                    >
                        Create Account
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <CustomInput
                            label="Name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />

                        <CustomInput
                            label="Email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />

                        <CustomInput
                            label="Password"
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={handleChange}
                        />

                        <CustomButton type="submit">
                            Signup
                        </CustomButton>
                    </form>

                    {/* <Typography mt={3} textAlign="center">
                        Already have an account? <Link to="/">Login</Link>
                    </Typography> */}
                </Paper>
            </Box>
        </Container>
    );
}

export default SignUp;