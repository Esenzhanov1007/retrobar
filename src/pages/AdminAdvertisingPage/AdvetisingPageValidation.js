import * as yup from "yup";

export const advertisingSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  phone: yup.number("Здесь должен быть номер").required(),
})