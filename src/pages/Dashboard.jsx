import { Box, Typography, Paper, Grid } from "@mui/material";
import DashboardCard from "../components/DashboardCard";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  EmojiEvents,
  Description,
  Work,
  Star
} from "@mui/icons-material";

const Dashboard = () => {
    const cards = [
        {
            title: "Interviews Completed",
            value: 12,
            icon: <EmojiEvents />,
            color:"#673ab7"
        },
        {
            title: "Resume Score",
            value: "85%",
            icon: <Description />,
            color:"#1976d2"
        },
        {
            title: "Applications",
            value: 25,
            icon: <Work />,
            color:"#2e7d32"
        },
        {
            title: "Skills Mastered",
            value: 18,
            icon: <Star />,
            color:"#ed6c02"
        }
    ];

    return (
        <DashboardLayout>
            <Box mb={4}>
                <Typography
                    variant="h4"
                    fontWeight={600}
                >
                    Good Evening, Emilys
                </Typography>

                <Typography
                    color="text.secondary"
                >
                    Ready to crack your next interview?
                </Typography>
            </Box>

            <Grid
                container
                spacing={3}
            >
                {
                    cards.map((card) => (
                        <Grid
                            xs={12}
                            sm={6}
                            md={3}
                            key={card.title}
                        >
                            <DashboardCard
                                title={card.title}
                                value={card.value}
                                icon={card.icon}
                                color={card.color}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </DashboardLayout>
    );
};

export default Dashboard;