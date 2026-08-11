import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../utils/profileValidation";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const useProfileForm = () => {

    const {user} = useAuth();

const {
    register,
    handleSubmit,
    reset,
    formState:{
        errors,
        isSubmitting
    }
}=useForm({
    resolver: yupResolver(profileSchema)
});

useEffect(() => {
    if(user) {
        reset({
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: "",
        experience: "",
      });
    }
}, [user, reset]);


return {
    register,
    handleSubmit,
    errors,
    isSubmitting
};
};


export default useProfileForm;