import { Box, Drawer, List, ListItem, ListItemText, Toolbar, AppBar, Typography, ListItemButton, ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import {
    Dashboard as DashboardIcon,
    Person as PersonIcon,
    Description as ResumeIcon,
    Psychology as InterviewIcon,
    Settings as SettingsIcon,
    PersonRemove,
} from "@mui/icons-material";

const drawerWidth = 240;

const menuItems = [
    {
        name: "Dashboard",
        icon: <DashboardIcon />,
        path: "/dashboard",

    },
    {
        name: "Profile",
        icon: <PersonIcon />,
        path: "/profile",
    },
    {
        name: "Resume",
        icon: <ResumeIcon />,
        path: "/resume"
    },
    {
        name: "Mock Interview",
        icon: <InterviewIcon />,
        path: "/interview"
    },
    {
        name: "Settings",
        icon: <SettingsIcon />,
        path: "/settings"
    }
];

const DashboardLayout = ({ children }) => {


    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Header />
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                    }
                }}
            >

                <Toolbar />
                <List>
                    {
                        menuItems.map((item) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton

                                    component={NavLink}

                                    to={item.path}

                                    sx={{

                                        "&.active": {
                                            backgroundColor: "#e8eaf6",
                                            color: "#3f51b5",

                                            "& .MuiListItemIcon-root": {
                                                color: "#3f51b5"
                                            }

                                        }
                                    }}
                                >
                                    <ListItemIcon>

                                        {item.icon}

                                    </ListItemIcon>


                                    <ListItemText
                                        primary={item.name}
                                    />


                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: `${drawerWidth}px`,
                    background:"#f5f7fb",
                    minHeight:"100vh"
                }}
            >

                <Toolbar />

                {children}

            </Box>
        </Box>
    );

}

export default DashboardLayout;