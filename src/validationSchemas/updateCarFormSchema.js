import * as Yup from "yup";

export const updateCarFormSchema = Yup.object({
  carModel: Yup.string(),
  carNumber: Yup.string(),
  price: Yup.string(),
  paymentDate: Yup.string(),
  carPhotoURL: Yup.string(),
  contact: Yup.string(),
});

export const updateCarContactFormSchema = Yup.object({
  contact: Yup.string(),
});

export const updateCarModelFormSchema = Yup.object({
  carModel: Yup.string(),
});

export const updateCarNumberFormSchema = Yup.object({
  carNumber: Yup.string(),
});

export const updateCarPaymentDateFormSchema = Yup.object({
  paymentDate: Yup.string(),
});

export const updateCarPriceFormSchema = Yup.object({
  price: Yup.string(),
});

export const updateCarPhotoFormSchema = Yup.object({
  carPhotoURL: Yup.string(),
});
