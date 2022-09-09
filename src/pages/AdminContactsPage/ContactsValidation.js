import * as yup from "yup";

export const contactsSchema = yup.object().shape({
  aboutus: yup.string().required(),
  phone: yup.number().required()
})