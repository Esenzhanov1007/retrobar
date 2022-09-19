import * as yup from "yup";

export const contactsSchema = yup.object().shape({
  info: yup.string().required(),
  phone: yup.string().required(),
  photo: yup.mixed().required(),
  email: yup.string().required(),
  telegram: yup.string().required(),
  instagram: yup.string().required(),
  youtube: yup.string().required(),
})