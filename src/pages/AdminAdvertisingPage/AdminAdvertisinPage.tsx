import React, { useState } from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import FileInput from '../../components/Admin/FileInput/FileInput';
import styles from "./AdminAdvertisingPage.module.scss";
import fileIcon from "../../assets/Admin/Photo/addImage.svg";
import TextInput from '../../components/Admin/TextInput/TextInput';
import Textarea from '../../components/Admin/Textarea/Textarea';
import PhoneInput from '../../components/Admin/PhoneInput/PhoneInput';
import PublishBtn from '../../components/Admin/PublishBtn/PublishBtn';
import { Link } from 'react-router-dom';
import { ADMIN_ADVERTISING_PAGE, ADMIN_POSTER_PAGE } from '../../consts/consts';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { advertisingSchema } from './AdvetisingPageValidation';
import { useAddAdMutation } from '../../store/features/Admin/Advertising/AdQueryApi';

const AdminAdvertisinPage = () => {

  const title = "Реклама/";
  const addFileTitle = "Добавить картинку";
  const inputTitle = "Название";
  const textareaTitle= "Описание";
  const phoneInputTitle= "Привязать номер";
  const name = "name";
  const descr = "info";
  const phone = "phone";
  const fileName = "adphoto";

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(advertisingSchema),
  });

  const [postAd] = useAddAdMutation();

  const onSubmit = (data: { [key: string]: any; }) => {
    const advertising = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];

      if (value[0] && typeof value !== "string" && typeof value[0] !== "string") {
        Array.from(value as File[]).forEach((val) => {
          advertising.append(key, val);
        });
      } else {
        advertising.append(key, value);
      }
    });
    postAd(advertising);
    reset();
  }

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.advertising_content}>
        <div className={styles.content_fileInput}>
          <div className={styles.fileInputTitleWrapper}>
            <Link to={ADMIN_ADVERTISING_PAGE} className={styles.fileInputTitle}>{title}</Link>
            <Link to={ADMIN_POSTER_PAGE} className={styles.fileInputTitle2}> Афиша</Link>
          </div>
          <FileInput name={fileName} register={register} title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
        </div>
        <div className={styles.content_textInputs}>
          <TextInput title={inputTitle} name={name} register={register} error={errors.name} />
          <Textarea title={textareaTitle} name={descr} register={register} error={errors.info} />
          <PhoneInput title={phoneInputTitle} name={phone} register={register} error={errors.phone} />
          <PublishBtn />
        </div>
      </form>
    </div>
  );
};

export default AdminAdvertisinPage;