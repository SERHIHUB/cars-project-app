import * as Yup from "yup";

export const createCarFormSchema = Yup.object({
  carModel: Yup.string().required(),
  carNumber: Yup.string().required(),
  price: Yup.string().required(),
  paymentDate: Yup.string().required(),
  carPhotoURL: Yup.string(),
  contact: Yup.string(),
});
