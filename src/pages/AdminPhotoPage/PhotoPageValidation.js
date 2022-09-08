import * as yup from "yup";

export const photoPageSchema = yup.object().shape({
  pub: yup.string().required("Поле обязательно к заполнению"),
  party: yup.string().required(),
  job: yup.string().required(),
  date: yup.string().required()
})