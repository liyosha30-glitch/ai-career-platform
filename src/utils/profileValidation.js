import * as yup from "yup";


export const profileSchema = yup.object({

    fullName: yup.string()
        .min(3, "Minimum 3 characters")
        .max(40, "Maximum 40 characters")
        .required("Full name is required"),


    email: yup.string()
        .email("Enter valid email")
        .required("Email is required"),


    phone: yup.string()
        .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit phone number")
        .required("Phone number is required"),


    experience: yup.number()
        .typeError("Experience must be a number")
        .required("Experience (Years)")
        .min(0)
        .max(20)


});