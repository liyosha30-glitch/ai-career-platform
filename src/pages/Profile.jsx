import { Container, Typography } from "@mui/material";
import ProfileForm from "../components/profile/ProfileForm";

const Profile = () => {

    return (
        <Container maxWidth="md">
            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >
                My Profile
            </Typography>
            <ProfileForm />
        </Container>
    );
};


export default Profile;