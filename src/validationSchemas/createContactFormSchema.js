import * as Yup from "yup";

export const createContactFormSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().required(),
  department: Yup.string(),
});
