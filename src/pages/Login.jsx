import { useState } from "react";
import CustomButton from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import { Container, Box, Typography, Paper } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/AuthService";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser(formData);
            console.log("Login Response:", response);

            login(
                response,
                response.accessToken
            );

            navigate("/dashboard");
        } catch (error) {
            console.log(
                "Login Error:",
                error.response?.data || error.message
            );
        }
    };
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Paper
                    elevation={6}
                    sx={{
                        p: 5,
                        width: "100%"
                    }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb={4}>
                        Welcome Back
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <CustomInput
                            label="Username"
                            name="username"
                            placeholder="Enter Email"
                            value={formData.username}
                            onChange={handleChange}
                        />

                        <CustomInput
                            label="Password"
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange} />
                        <CustomButton type="submit">Login</CustomButton>
                    </form>
                    <Typography mt={3} textAlign="center">
                        Don't have an account? <Link to="/signup">Signup</Link>
                    </Typography>
                </Paper>
            </Box>
        </Container>

    );
};

export default Login;