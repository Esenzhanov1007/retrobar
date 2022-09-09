import * as yup from "yup";

export const photoPageSchema = yup.object().shape({
  pubname: yup.string().required("Поле обязательно к заполнению"),
  eventname: yup.string().required("Поле обязательно к заполнению"),
  photographer: yup.string().required("Поле обязательно к заполнению"),
  date: yup.string().required("Поле обязательно к заполнению"),
  eventphotos: yup.mixed().required("Добавьте файл"),
})