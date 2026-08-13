import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import useProfileForm from "../../hooks/useProfileForm";
import { useAuth } from "../../context/AuthContext";

const ProfileForm = () => {
    const { user } = useAuth();

    const { register, handleSubmit, errors, isSubmitting } =
        useProfileForm();

    const submitHandler = async (data) => {
        console.log("Profile Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Profile saved");
    };

    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
            }}
        >
            <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
                <Stack spacing={1.5}>
                    <Box>
                        <Typography
                            variant="h6"
                            fontWeight={800}
                            sx={{ lineHeight: 1.25 }}
                        >
                            Personal information
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 0.35, lineHeight: 1.4 }}
                        >
                            Tell us about yourself. These details will be used to
                            personalize your future career recommendations.
                        </Typography>
                    </Box>

                    <Divider />

                    <Box component="form" onSubmit={handleSubmit(submitHandler)}>
                        <Stack spacing={1.5}>
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        md: "1fr 1fr",
                                    },
                                    gap: { xs: 1.5, md: 1.75 },
                                }}
                            >
                                <TextField
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    fullWidth
                                    size="small"
                                    {...register("fullName")}
                                    error={Boolean(errors.fullName)}
                                    helperText={errors.fullName?.message}
                                />

                                <TextField
                                    label="Email Address"
                                    fullWidth
                                    size="small"
                                    {...register("email")}
                                    InputProps={{ readOnly: true }}
                                    helperText={
                                        user?.email
                                            ? "Linked to your account"
                                            : "Email is read-only"
                                    }
                                />

                                <TextField
                                    label="Phone Number"
                                    placeholder="Enter your phone number"
                                    fullWidth
                                    size="small"
                                    {...register("phone")}
                                    error={Boolean(errors.phone)}
                                    helperText={errors.phone?.message}
                                />

                                <TextField
                                    label="Years of Experience"
                                    placeholder="e.g. 6"
                                    fullWidth
                                    size="small"
                                    type="number"
                                    inputProps={{ min: 0, max: 50 }}
                                    {...register("experience")}
                                    error={Boolean(errors.experience)}
                                    helperText={errors.experience?.message}
                                />
                            </Box>

                            <Box
                                sx={{
                                    p: 1.25,
                                    borderRadius: 3,
                                    bgcolor: "rgba(109,69,216,0.045)",
                                    border: "1px solid rgba(109,69,216,0.09)",
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={700}
                                    sx={{ lineHeight: 1.3 }}
                                >
                                    Why complete your profile?
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        mt: 0.25,
                                        lineHeight: 1.35,
                                    }}
                                >
                                    A complete profile helps personalize resume
                                    analysis, skill-gap insights, job matching,
                                    and AI career recommendations.
                                </Typography>
                            </Box>

                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                sx={{ pt: 0 }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="medium"
                                    disabled={isSubmitting}
                                    sx={{
                                        minWidth: 160,
                                        borderRadius: 2.5,
                                        textTransform: "none",
                                        fontWeight: 700,
                                        py: 0.85,
                                    }}
                                >
                                    {isSubmitting ? "Saving..." : "Save Changes"}
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ProfileForm;