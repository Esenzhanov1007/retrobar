import React, { useState } from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import FileInput from '../../components/Admin/FileInput/FileInput';
import styles from "./AdminInstitutionPage.module.scss";
import fileIcon from "../../assets/Admin/Photo/addImage.svg";
import logoIcon from "../../assets/Admin/InstitutionPage/addLogo.svg";
import FileInputLogo from '../../components/Admin/FileInputLogo/FileInputLogo';
import TextInput from '../../components/Admin/TextInput/TextInput';
import Textarea from '../../components/Admin/Textarea/Textarea';
import FileInputLink from '../../components/Admin/FileInputLink/FileInputLink';
import PublishBtn from '../../components/Admin/PublishBtn/PublishBtn';
import { yupResolver } from '@hookform/resolvers/yup';
import { institutionSchema } from './InstitutionValidation';
import { useForm } from 'react-hook-form';
import LineChart from './components/LineChart';
import { Rating } from '@mui/material';
import { useAddPubMutation } from '../../store/features/Admin/Institution/pubQueryApi';

const AdminInstitutionPage = () => {

  const title = "Заведение";
  const addFileTitle = "Добавить картинки";
  const addLogoTitle = "Добавить лого";
  const institutionTitle = "Название заведения";
  const descrTitle = "О заведении";
  const descrInputSchedule= "Время работы";
  const descrInputKitchen = "Вид кухни";
  const descrInputCheck = "Средний чек";
  const descrInputServices = "Услуги";
  const contactsLocation = "Геопозиция";
  const contactsPhone = "Номер";

  const name = "pubname";
  const descr = "info";
  const time = "workinghours";
  const kitchen = "kitchen";
  const check = "averagecheck";
  const services = "service";
  const location = "location";
  const phone = "phone";
  const fileName = "pubphotos";
  const logoName = "publogo";
  const contactsSocial = "website";

  const rateData = [
    {
      id: 1,
      date: "01 мая",
      rate: 1,
    },
    {
      id: 2,
      date: "08 мая",
      rate: 4,
    },
    {
      id: 3,
      date: "12 мая",
      rate: 3,
    },
    {
      id: 4,
      date: "16 мая",
      rate: 5,
    },
    {
      id: 5,
      date: "21 мая",
      rate: 4,
    },
    {
      id: 6,
      date: "27 мая",
      rate: 5,
    },
    {
      id: 7,
      date: "31 мая",
      rate: 1,
    },
  ]

  const [rate, setRate] = useState({
    labels: rateData.map((item) => item.date),
    datasets: [{
      label: "",
      data: rateData.map((item) => item.rate - 1),
      backgroundColor: "#FF531E",
      tension: 0.4,
      capBezierPoints: false,
      fill: true,
    }]
  })

  const [value, setValue] = useState<number | null>(2);

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(institutionSchema),
  });

  const [postPub] = useAddPubMutation();

  const onSubmit = (data: { [key: string]: any; }) => {
    data.rating = value;
    const phone = data.phone;
    const location = data.location;
    data.phone = JSON.stringify([phone]);
    data.location = JSON.stringify([location]);
    delete data.logoLink;
    
    const pub = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value[0] && typeof value !== "string" && typeof value[0] !== "string") {
        Array.from(value as File[]).forEach((val) => {
          console.log(`${key}`, val);
          pub.append(key, val);
        });
      } else {
        pub.append(key, value);
      }
    });
    postPub(pub);
    reset();
  }



  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <form className={styles.institution_content} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.institutionImgWrapper}>
          <div className={styles.content_fileInput}>
            <div className={styles.fileInputTitleWrapper}>
              <h2 className={styles.fileInputTitle}>{title}</h2>
            </div>
            <FileInput name={fileName} register={register} title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
          </div>
          <FileInputLogo name={logoName} register={register} addLogoTitle={addLogoTitle} logoIcon={logoIcon} />
        </div>
        <div className={styles.institutionInfoWrapper}>
          <div className={styles.institutionTitleInput}>
            <TextInput title={institutionTitle} name={name} register={register} error={errors.pubname} />
          </div>
          <div className={styles.institutionDescrInput}>
            <Textarea title={descrTitle} name={descr} register={register} error={errors.info} />
          </div>
        </div>
        <div className={styles.intitutionRatingWrapper}>
          <div className={styles.ratingTitleWrapper}>
            <div className={styles.ratingTitleStar}>
              <h3>Рейтинг</h3>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={styles.ratingTitle}>
              <h3>Рейтнг за май 2022</h3>
            </div>
          </div>
          <div className={styles.ratingWrapper}>
            <LineChart chartData={rate} />
            <div className={styles.ratingDate}>
            { rateData.map((item) => <h5>{item.date}</h5>)}
            </div>
          </div>
        </div>
        <div className={styles.institutionDescrInputWrapper}>
          <div className={styles.institutionDescrInputTitleWrapper}>
            <h2 className={styles.descrInputTitle}>Описание</h2>
          </div>
          <div className={styles.descrInputs}>
            <TextInput title={descrInputSchedule} name={time} register={register} error={errors.workinghours} />
            <TextInput title={descrInputKitchen} name={kitchen} register={register} error={errors.kitchen} />
            <TextInput title={descrInputCheck} name={check} register={register} error={errors.averagecheck} />
            <TextInput title={descrInputServices} name={services} register={register} error={errors.service} />
          </div>
        </div>
        <div className={styles.institutionContactsWrapper}>
          <div className={styles.contactsTitleWrapper}>
            <h2 className={styles.contactsTitle}>Контакты</h2>
          </div>
          <div className={styles.contactsLinkInput}>
            <FileInputLink name={contactsSocial} register={register} error={errors.website} />
          </div>
          <div className={styles.contactsInputs}>
            <TextInput title={contactsLocation} name={location} register={register} error={errors.location} />
            <TextInput title={contactsPhone} name={phone} register={register} error={errors.phone} />
          </div>
          <PublishBtn />
        </div>
      </form>
    </div>
  );
};

export default AdminInstitutionPage;