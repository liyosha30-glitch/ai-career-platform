import {
    Avatar,
    Badge,
    Box,
    IconButton,
    InputAdornment,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import { NotificationsNone, Search } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const firstName = user?.firstName || "there";

    return (
        <Toolbar sx={{ minHeight: "72px !important", px: "24px !important" }}>
            <TextField
                size="small"
                placeholder="Search anything..."
                sx={{
                    width: { xs: 220, md: 370 },
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2.5,
                        bgcolor: "#faf9fd",
                        "& fieldset": { borderColor: "#eeeaf5" }
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search sx={{ color: "#6d6980" }} />
                        </InputAdornment>
                    )
                }}
            />

            <Box sx={{ flexGrow: 1 }} />

            <IconButton sx={{ mr: 1.5 }}>
                <Badge badgeContent={3} color="primary">
                    <NotificationsNone />
                </Badge>
            </IconButton>

            <Box
                onClick={() => navigate("/profile")}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    cursor: "pointer",
                    pl: 1,
                    borderLeft: "1px solid #eeeaf5"
                }}
            >
                <Avatar sx={{ width: 40, height: 40, bgcolor: "#7048e8" }}>
                    {firstName.charAt(0).toUpperCase()}
                </Avatar>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Typography variant="body2" fontWeight={750}>{firstName}</Typography>
                    <Typography variant="caption" color="text.secondary">
                        {user?.role || "Frontend Developer"}
                    </Typography>
                </Box>
            </Box>
        </Toolbar>
    );
};

export default Header;
