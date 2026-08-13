import { Box, Card, CardContent, LinearProgress, Stack, Typography } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";

const DashboardCard = ({ title, value, icon, color, trend, progress }) => {
    return (
        <Card
            sx={{
                height: "100%",
                minHeight: 158,
                borderRadius: 3,
                border: "1px solid #eeeaf5",
                boxShadow: "0 5px 20px rgba(55, 35, 90, 0.06)",
                transition: "transform .2s ease, box-shadow .2s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 28px rgba(55, 35, 90, 0.10)"
                }
            }}
        >
            <CardContent sx={{ p: 2.25 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box
                        sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            bgcolor: `${color}16`,
                            color,
                            display: "grid",
                            placeItems: "center"
                        }}
                    >
                        {icon}
                    </Box>
                    {trend && (
                        <Stack direction="row" spacing={0.4} alignItems="center" sx={{ color: "#2e9d62" }}>
                            <TrendingUp sx={{ fontSize: 16 }} />
                            <Typography variant="caption" fontWeight={700}>{trend}</Typography>
                        </Stack>
                    )}
                </Stack>

                <Typography variant="h4" fontWeight={800} sx={{ mt: 2, letterSpacing: "-0.03em" }}>
                    {value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.3 }}>
                    {title}
                </Typography>

                {typeof progress === "number" && (
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            mt: 1.5,
                            height: 6,
                            borderRadius: 10,
                            bgcolor: "#eeeaf7",
                            "& .MuiLinearProgress-bar": {
                                borderRadius: 10,
                                bgcolor: color
                            }
                        }}
                    />
                )}
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
