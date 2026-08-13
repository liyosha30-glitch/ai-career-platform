import {
    AppBar,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
    Assessment,
    Dashboard as DashboardIcon,
    Description as ResumeIcon,
    Person as PersonIcon,
    Psychology,
    Settings as SettingsIcon
} from "@mui/icons-material";
import Header from "../components/Header";

const drawerWidth = 250;

const menuItems = [
    { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { name: "Profile", icon: <PersonIcon />, path: "/profile" }
];

const futureItems = [
    { name: "Resume Analyzer", icon: <ResumeIcon /> },
    { name: "AI Job Matches", icon: <Psychology /> },
    { name: "Skill Assessment", icon: <Assessment /> },
    { name: "Settings", icon: <SettingsIcon /> }
];

const DashboardLayout = ({ children }) => (
    <Box sx={{ minHeight: "100vh", bgcolor: "#faf9fd" }}>
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: "rgba(255,255,255,.94)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid #eeeaf5",
                color: "#17152b"
            }}
        >
            <Header />
        </AppBar>

        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    borderRight: "1px solid #eeeaf5",
                    bgcolor: "#fff",
                    px: 1.5,
                    overflowX: "hidden"
                }
            }}
        >
            <Toolbar />

            <Box sx={{ px: 1.5, pt: 2.5, pb: 2 }}>
                <Typography fontWeight={800} sx={{ color: "#17152b", letterSpacing: "-0.02em" }}>
                    ✦ AI Career Platform
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Your AI career coach
                </Typography>
            </Box>

            <List sx={{ pt: 0 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.name} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            sx={navItemSx}
                        >
                            <ListItemIcon sx={navIconSx}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 600 }} />
                        </ListItemButton>
                    </ListItem>
                ))}

                <Typography variant="overline" color="text.secondary" sx={{ px: 2, pt: 2 }}>
                    Coming soon
                </Typography>

                {futureItems.map((item) => (
                    <ListItem key={item.name} disablePadding sx={{ mb: 0.3 }}>
                        <ListItemButton disabled sx={{ borderRadius: 2.5 }}>
                            <ListItemIcon sx={navIconSx}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 550 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box sx={{ mt: "auto", px: 1.5, pb: 2.5 }}>
                <Box sx={{ p: 1.5, borderRadius: 2.5, bgcolor: "#f6f2ff" }}>
                    <Typography variant="caption" fontWeight={700} color="#7048e8">
                        Phase 3
                    </Typography>
                    <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 0.4 }}>
                        Authentication & profile completed
                    </Typography>
                </Box>
            </Box>
        </Drawer>

        <Box
            component="main"
            sx={{
                ml: `${drawerWidth}px`,
                minHeight: "100vh",
                px: { xs: 2, md: 3.5 },
                pb: 4,
                bgcolor: "#faf9fd"
            }}
        >
            <Toolbar />
            <Box sx={{ pt: 3 }}>{children}</Box>
        </Box>
    </Box>
);

const navItemSx = {
    minHeight: 46,
    borderRadius: 2.5,
    color: "#4b4960",
    px: 1.5,
    "& .MuiListItemIcon-root": { color: "#77738a" },
    "&.active": {
        bgcolor: "#f0eafd",
        color: "#7048e8",
        "& .MuiListItemIcon-root": { color: "#7048e8" }
    },
    "&:hover": { bgcolor: "#f7f5fc" }
};

const navIconSx = { minWidth: 38 };

export default DashboardLayout;
