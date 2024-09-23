import * as Yup from "yup";

export const updateContactFormSchema = Yup.object({
  employeeName: Yup.string(),
  employeeNumber: Yup.string(),
  department: Yup.string(),
});
