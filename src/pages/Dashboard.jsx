import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import {
    ArrowForward,
    CheckCircle,
    Description,
    Psychology,
    RocketLaunch,
    School,
    Star,
    Work} from "@mui/icons-material";
import DashboardCard from "../components/DashboardCard";
import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../context/AuthContext";

const progressItems = [
    { label: "Data Structures & Algorithms", value: 70 },
    { label: "React Development", value: 90 },
    { label: "JavaScript", value: 80 },
    { label: "System Design", value: 60 },
    { label: "DBMS", value: 75 }
];

const activities = [
    { label: "Profile updated", time: "2 hours ago", icon: <CheckCircle /> },
    { label: "Resume analyzed", time: "5 hours ago", icon: <Description /> },
    { label: "New job matches found", time: "1 day ago", icon: <Work /> },
    { label: "Skill assessment completed", time: "2 days ago", icon: <Star /> },
    { label: "Applied to 5 new jobs", time: "3 days ago", icon: <RocketLaunch /> }
];

const Dashboard = () => {
    const { user } = useAuth();
    const firstName = user?.firstName || "there";

    const cards = [
        {
            title: "Profile Completion",
            value: "80%",
            icon: <School />,
            color: "#7048e8",
            trend: "+12%",
            progress: 80
        },
        {
            title: "Resume Score",
            value: "85/100",
            icon: <Description />,
            color: "#4f8df7",
            trend: "+8%",
            progress: 85
        },
        {
            title: "Applications",
            value: 25,
            icon: <Work />,
            color: "#35a66f",
            trend: "+5"
        },
        {
            title: "Skills Mastered",
            value: 18,
            icon: <Star />,
            color: "#f1a23a",
            trend: "+3"
        }
    ];

    return (
        <DashboardLayout>
            <Box sx={{ mb: 3 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        color: "#17152b"
                    }}
                >
                    Good evening, {firstName}! 👋
                </Typography>
                <Typography sx={{ mt: 0.5, color: "text.secondary" }}>
                    Here's your career progress overview.
                </Typography>
            </Box>

            <Grid container spacing={2.5}>
                {cards.map((card) => (
                    <Grid item xs={12} sm={6} md={3} key={card.title}>
                        <DashboardCard {...card} />
                    </Grid>
                ))}

                <Grid item xs={12} md={5}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 2.5 }}>
                            <Typography variant="h6" fontWeight={750}>
                                Career Readiness
                            </Typography>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: 2 }}>
                                <Box sx={{ position: "relative", display: "inline-flex", flexShrink: 0 }}>
                                    <Box
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            borderRadius: "50%",
                                            background: "conic-gradient(#7048e8 0deg 281deg, #ece9f7 281deg 360deg)",
                                            display: "grid",
                                            placeItems: "center"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 112,
                                                height: 112,
                                                borderRadius: "50%",
                                                bgcolor: "white",
                                                display: "grid",
                                                placeItems: "center"
                                            }}
                                        >
                                            <Box sx={{ textAlign: "center" }}>
                                                <Typography variant="h4" fontWeight={800}>78%</Typography>
                                                <Typography variant="caption" color="text.secondary">Ready to apply</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box>
                                    <Typography fontWeight={700} mb={1}>
                                        You're doing great!
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                        Keep improving your System Design and behavioral skills to reach 90%+.
                                    </Typography>
                                    <Button
                                        size="small"
                                        endIcon={<ArrowForward />}
                                        sx={{ mt: 1.5, textTransform: "none" }}
                                    >
                                        View recommendations
                                    </Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 2.5 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
                                <Typography variant="h6" fontWeight={750}>Skill Progress</Typography>
                                <Button size="small" sx={{ textTransform: "none" }}>View all</Button>
                            </Stack>

                            <Stack spacing={1.7}>
                                {progressItems.map((item) => (
                                    <Box key={item.label}>
                                        <Stack direction="row" justifyContent="space-between" mb={0.6}>
                                            <Typography variant="body2" fontWeight={550}>{item.label}</Typography>
                                            <Typography variant="caption" color="text.secondary">{item.value}%</Typography>
                                        </Stack>
                                        <LinearProgress
                                            variant="determinate"
                                            value={item.value}
                                            sx={progressSx}
                                        />
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 2.5 }}>
                            <Typography variant="h6" fontWeight={750}>Job Search</Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", my: 1.5 }}>
                                <Box sx={{
                                    width: 125,
                                    height: 125,
                                    borderRadius: "50%",
                                    background: "conic-gradient(#7048e8 0 50%, #9d7bea 50% 80%, #c7b8f4 80% 96%, #e8e3f7 96% 100%)",
                                    display: "grid",
                                    placeItems: "center"
                                }}>
                                    <Box sx={{ width: 82, height: 82, bgcolor: "white", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Typography variant="h5" fontWeight={800}>25</Typography>
                                            <Typography variant="caption" color="text.secondary">Total</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Stack spacing={0.8}>
                                <Legend label="Applied" value="25 (50%)" />
                                <Legend label="Shortlisted" value="15 (30%)" />
                                <Legend label="Interview" value="8 (16%)" />
                                <Legend label="Offer" value="2 (4%)" />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 2.5 }}>
                            <Typography variant="h6" fontWeight={750} mb={1}>Recommended Next Steps</Typography>
                            <List disablePadding>
                                <ActionItem icon={<CheckCircle />} title="Complete your profile" subtitle="Add your skills and work experience" status="Completed" />
                                <ActionItem icon={<Description />} title="Upload your resume" subtitle="Get AI-powered resume analysis" status="Start" />
                                <ActionItem icon={<School />} title="Take skill assessment" subtitle="Identify your strengths and gaps" status="Start" />
                                <ActionItem icon={<Psychology />} title="Practice mock interview" subtitle="Improve with AI feedback" status="Start" />
                                <ActionItem icon={<RocketLaunch />} title="Apply to recommended jobs" subtitle="10 new job matches for you" status="Start" />
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 2.5 }}>
                            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                <Psychology sx={{ color: "#7048e8" }} />
                                <Typography variant="h6" fontWeight={750}>AI Career Insight</Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                Your React skills are in high demand. Focus on improving System Design and behavioral skills to increase your chances of getting product-company offers.
                            </Typography>
                            <Box sx={{ mt: 2, p: 1.5, borderRadius: 2, bgcolor: "#f6f2ff" }}>
                                <Typography variant="subtitle2" fontWeight={750} mb={1}>Top Matched Roles</Typography>
                                <RoleMatch role="Frontend Developer" match="92%" />
                                <RoleMatch role="React Developer" match="88%" />
                                <RoleMatch role="UI Developer" match="85%" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Card sx={sectionCardSx}>
                        <CardContent sx={{ p: 2.5 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="h6" fontWeight={750}>Recent Activity</Typography>
                                <Button size="small" sx={{ textTransform: "none" }}>View all</Button>
                            </Stack>
                            <List disablePadding>
                                {activities.map((activity) => (
                                    <ListItem key={activity.label} disableGutters sx={{ py: 1, borderBottom: "1px solid #f0edf6" }}>
                                        <ListItemIcon sx={{ minWidth: 38, color: "#7048e8" }}>
                                            {activity.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<Typography variant="body2" fontWeight={550}>{activity.label}</Typography>}
                                            secondary={<Typography variant="caption" color="text.secondary">{activity.time}</Typography>}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </DashboardLayout>
    );
};

const Legend = ({ label, value }) => (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#7048e8" }} />
            <Typography variant="caption">{label}</Typography>
        </Stack>
        <Typography variant="caption" color="text.secondary">{value}</Typography>
    </Stack>
);

const ActionItem = ({ icon, title, subtitle, status }) => (
    <ListItem disableGutters sx={{ py: 1.05, borderBottom: "1px solid #f0edf6" }}>
        <ListItemIcon sx={{ minWidth: 40, color: "#7048e8" }}>{icon}</ListItemIcon>
        <ListItemText
            primary={<Typography variant="body2" fontWeight={650}>{title}</Typography>}
            secondary={<Typography variant="caption" color="text.secondary">{subtitle}</Typography>}
        />
        <Chip
            label={status}
            size="small"
            variant={status === "Completed" ? "filled" : "outlined"}
            sx={status === "Completed" ? { bgcolor: "#e7f7ee", color: "#258a55", fontWeight: 650 } : { borderColor: "#c8b8f5", color: "#7048e8" }}
        />
    </ListItem>
);

const RoleMatch = ({ role, match }) => (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 0.5 }}>
        <Typography variant="body2">{role}</Typography>
        <Chip label={`${match} match`} size="small" sx={{ bgcolor: "#e7f7ee", color: "#258a55", fontWeight: 650 }} />
    </Stack>
);

const sectionCardSx = {
    height: "100%",
    borderRadius: 3,
    border: "1px solid #eeeaf5",
    boxShadow: "0 5px 20px rgba(55, 35, 90, 0.06)"
};

const progressSx = {
    height: 7,
    borderRadius: 10,
    bgcolor: "#eeeaf7",
    "& .MuiLinearProgress-bar": {
        borderRadius: 10,
        background: "linear-gradient(90deg, #7048e8, #8d6be9)"
    }
};

export default Dashboard;
