import * as Yup from 'yup';

export const loginValidation = Yup.object({
    email : Yup.string().trim().email("Invalid Email").required("Email is required"),
    password : Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character and space is not allowed"
    ),
})