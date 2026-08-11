import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Box,
    Button
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    return (
        <Toolbar>
            <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
            >
                🚀 AI Career Platform
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                }}
            >
                <Box>
                    <Typography fontWeight={600}>
                        {user?.firstName}
                    </Typography>

                    <Typography
                        variant="caption"
                    >
                        {user?.role || "Frontend Developer"}
                    </Typography>

                </Box>

                <Avatar>
                    {user?.firstName?.charAt(0)}
                </Avatar>

                <Button
                variant="outlined"
                    color="inherit"
                    size="small"
                    onClick={() => navigate("/profile")}
                    sx={{
                        ml: 2,
                        borderColor: "white",
                        color: "white"
                    }}
                >
                    Profile
                </Button>

                <Button
                    variant="outlined"
                    color="inherit"
                    size="small"
                    onClick={logout}
                    sx={{
                        ml: 2,
                        borderColor: "white",
                        color: "white"
                    }}
                >
                    Logout
                </Button>

            </Box>
        </Toolbar>
    )
}


export default Header;