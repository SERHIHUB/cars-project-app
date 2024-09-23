import * as Yup from "yup";

export const signUpFormSchema = Yup.object({
  userName: Yup.string().min(3).max(20).required(),
  email: Yup.string().email().required(),
  ownerEmail: Yup.string().email(),
  password: Yup.string()
    .min(4, "must contain at least 4 characters")
    .max(20)
    .required(),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
});

export const signInFormSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(4, "must contain at least 4 characters")
    .max(20)
    .required(),
});
