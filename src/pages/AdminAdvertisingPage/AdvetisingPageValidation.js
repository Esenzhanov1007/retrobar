import * as yup from "yup";

export const advertisingSchema = yup.object().shape({
  name: yup.string().required(),
  info: yup.string().required(),
  phone: yup.number("Здесь должен быть номер").required(),
  adphoto: yup.mixed().required("Добавьте файл"),
})