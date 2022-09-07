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
  const name = "name";
  const descr = "description";
  const time = "time";
  const kitchen = "kitchen";
  const check = "check";
  const services = "services";
  const location = "location";
  const phone = "phone";

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
      rate: 3,
    },
  ]

  const [rate, setRate] = useState({
    labels: rateData.map((item) => item.date),
    datasets: [{
      label: "Rating",
      data: rateData.map((item) => item.rate),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.4,
      borderJoinStyle: "round",
      capBezierPoints: false,
      fill: "rgb(255, 176, 59)",
    }]
  })
  const [data, setData] = useState({});

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(institutionSchema),
  });

  const onSubmit = (data: {}) => {
    setData(data);
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
            <FileInput title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
          </div>
          <FileInputLogo addLogoTitle={addLogoTitle} logoIcon={logoIcon} />
        </div>
        <div className={styles.institutionInfoWrapper}>
          <div className={styles.institutionTitleInput}>
            <TextInput title={institutionTitle} name={name} register={register} error={errors.name} />
          </div>
          <div className={styles.institutionDescrInput}>
            <Textarea title={descrTitle} name={descr} register={register} error={errors.description} />
          </div>
        </div>
        <div className={styles.intitutionRatingWrapper}>
          <LineChart chartData={rate} />
        </div>
        <div className={styles.institutionDescrInputWrapper}>
          <div className={styles.institutionDescrInputTitleWrapper}>
            <h2 className={styles.descrInputTitle}>Описание</h2>
          </div>
          <div className={styles.descrInputs}>
            <TextInput title={descrInputSchedule} name={time} register={register} error={errors.time} />
            <TextInput title={descrInputKitchen} name={kitchen} register={register} error={errors.kitchen} />
            <TextInput title={descrInputCheck} name={check} register={register} error={errors.check} />
            <TextInput title={descrInputServices} name={services} register={register} error={errors.services} />
          </div>
        </div>
        <div className={styles.institutionContactsWrapper}>
          <div className={styles.contactsTitleWrapper}>
            <h2 className={styles.contactsTitle}>Контакты</h2>
          </div>
          <div className={styles.contactsLinkInput}>
            <FileInputLink />
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