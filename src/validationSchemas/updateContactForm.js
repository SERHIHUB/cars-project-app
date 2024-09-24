import * as Yup from "yup";

export const updateContactFormSchema = Yup.object({
  name: Yup.string(),
  number: Yup.string(),
  department: Yup.string(),
});
