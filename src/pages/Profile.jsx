import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    LinearProgress,
    Stack,
    Typography,
} from "@mui/material";
import ProfileForm from "../components/profile/ProfileForm";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const { user } = useAuth();

    const fullName = user?.firstName
        ? `${user.firstName}${user.lastName ? ` ${user.lastName}` : ""}`
        : user?.name || "Career Profile";

    return (
        <Container
            maxWidth="lg"
            sx={{
                py: { xs: 1.5, md: 2 },
            }}
        >
            <Stack spacing={{ xs: 1.5, md: 2 }}>
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            fontSize: { xs: "1.8rem", md: "2.35rem" },
                            lineHeight: 1.1,
                        }}
                    >
                        My Profile
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 0.4,
                            fontSize: "0.95rem",
                            lineHeight: 1.35,
                        }}
                    >
                        Build a strong career profile to get better recommendations.
                    </Typography>
                </Box>

                <Card
                    elevation={0}
                    sx={{
                        overflow: "hidden",
                        borderRadius: 4,
                        border: "1px solid",
                        borderColor: "rgba(91, 63, 180, 0.14)",
                        background:
                            "linear-gradient(135deg, #f7f2ff 0%, #ffffff 58%, #f4f8ff 100%)",
                    }}
                >
                    <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={{ xs: 1.5, sm: 2 }}
                            alignItems={{ xs: "flex-start", sm: "center" }}
                        >
                            <Avatar
                                src={user?.image || undefined}
                                sx={{
                                    width: 68,
                                    height: 68,
                                    bgcolor: "#6d45d8",
                                    fontSize: "1.45rem",
                                    fontWeight: 800,
                                    border: "4px solid rgba(109,69,216,0.12)",
                                }}
                            >
                                {fullName.charAt(0).toUpperCase()}
                            </Avatar>

                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={800}
                                    sx={{ lineHeight: 1.25 }}
                                >
                                    {fullName}
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    sx={{
                                        mt: 0.25,
                                        fontSize: "0.92rem",
                                        lineHeight: 1.35,
                                    }}
                                >
                                    {user?.email ||
                                        "Complete your professional details below"}
                                </Typography>

                                <Stack
                                    direction="row"
                                    spacing={0.75}
                                    sx={{ mt: 0.8 }}
                                >
                                    <Chip
                                        label="Career Profile"
                                        size="small"
                                        sx={{
                                            height: 24,
                                            fontWeight: 700,
                                            bgcolor: "rgba(109,69,216,0.10)",
                                            color: "#5b35bd",
                                        }}
                                    />

                                    <Chip
                                        label="Phase 3"
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            height: 24,
                                            fontWeight: 600,
                                        }}
                                    />
                                </Stack>
                            </Box>

                            <Box
                                sx={{
                                    minWidth: { sm: 175 },
                                    width: { xs: "100%", sm: 175 },
                                    p: 1.35,
                                    borderRadius: 3,
                                    bgcolor: "rgba(255,255,255,0.78)",
                                    border: "1px solid rgba(91,63,180,0.10)",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        Profile strength
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        fontWeight={800}
                                        color="primary.main"
                                    >
                                        60%
                                    </Typography>
                                </Stack>

                                <LinearProgress
                                    variant="determinate"
                                    value={60}
                                    sx={{
                                        mt: 0.7,
                                        height: 6,
                                        borderRadius: 10,
                                        bgcolor: "rgba(109,69,216,0.10)",
                                        "& .MuiLinearProgress-bar": {
                                            borderRadius: 10,
                                        },
                                    }}
                                />

                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{
                                        display: "block",
                                        mt: 0.55,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    Add your details to improve your profile.
                                </Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>

                <ProfileForm />
            </Stack>
        </Container>
    );
};

export default Profile;