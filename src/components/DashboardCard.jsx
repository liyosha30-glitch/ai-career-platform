import {
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/material";


const DashboardCard = ({
    title,
    value,
    icon,
    color
}) => {

    return (
        <Card sx={{
            height: "160px",
            borderRadius: 4,
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            "&:hover": {
                transform: "translateY(-5px)"
            }
        }}>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                fontSize: 40,
                                mb: 1,
                                color:color
                            }}
                        >
                            {icon}
                        </Box>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                        >
                            {value}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {title}
                        </Typography>


                    </Box>

                </Box>
            </CardContent>
        </Card>
    )
}


export default DashboardCard;