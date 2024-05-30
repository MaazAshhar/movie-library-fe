import * as Yup from 'yup';

export const signUpValidation = Yup.object({
    name : Yup.string().trim().min(3,"Name should be at least 3 character"),
    email : Yup.string().trim().email("Invalid Email").required("Email is required"),
    password : Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character and space is not allowed"
    ),
    phone : Yup.string().trim().min(10,"Enter Valid Phone No").max(10,"Enter Valid Phone No")
})