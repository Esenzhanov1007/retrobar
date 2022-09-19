import * as yup from "yup";

export const institutionSchema = yup.object().shape({
  pubname: yup.string().required(),
  info: yup.string().required(),
  workinghours: yup.string().required(),
  kitchen: yup.string().required(),
  averagecheck: yup.number().required(),
  service: yup.string().required(),
  location: yup.string().required(),
  phone: yup.mixed().required(),
  pubphotos: yup.mixed().required("Добавьте файл"),
  publogo: yup.mixed().required("Добавьте файл"),
  website: yup.string().required(),
})