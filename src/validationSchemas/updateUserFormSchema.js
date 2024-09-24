import * as Yup from "yup";

export const updateUserFormSchema = Yup.object({
  name: Yup.string().min(3).max(20),
  email: Yup.string().email(),
  avatarURL: Yup.string(),
  password: Yup.string().min(4, "must contain at least 4 characters").max(20),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
});

export const updateUserNameFormSchema = Yup.object({
  name: Yup.string().min(3).max(20),
});

export const updateUserEmailFormSchema = Yup.object({
  email: Yup.string().email(),
});

export const updateUserAvatarFormSchema = Yup.object({
  avatarURL: Yup.string(),
});

export const updateUserPasswordFormSchema = Yup.object({
  password: Yup.string().min(4, "must contain at least 4 characters").max(20),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
});
