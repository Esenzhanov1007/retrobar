import * as yup from "yup";

export const institutionSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  time: yup.string().required(),
  kitchen: yup.string().required(),
  check: yup.string().required(),
  services: yup.string().required(),
  location: yup.string().required(),
  phone: yup.number().required(),
})