import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminPhotoPage.module.scss";
import FileInput from '../../components/Admin/FileInput/FileInput';
import fileIcon from "../../assets/Admin/Photo/addImage.svg";
import FileInputLink from '../../components/Admin/FileInputLink/FileInputLink';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { photoPageSchema } from './PhotoPageValidation';
import { useState } from 'react';
import TextInput from '../../components/Admin/TextInput/TextInput';
import ViewsSlider from '../../components/Admin/ViewsSlider/ViewsSlider';
import PublishBtn from '../../components/Admin/PublishBtn/PublishBtn';
import { useAddPhotoMutation } from '../../store/features/Admin/Photo/PhotoQuery';

const AdminPhotoPage = () => {

  const title = "Фото";
  const addFileTitle = "Добавить картинки";
  const institutionName = "Название заведения";
  const partyName = "Название вечеринки";
  const job = "Фотограф";
  const date = "Дата";
  const pubName = "pubname";
  const party = "eventname";
  const jobName = "photographer";
  const dateName = "date";
  const viewsName = "multiplier";
  const fileName = "eventphotos";
  const fileLinkName = "adsads";

  const [postPhoto] = useAddPhotoMutation();

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(photoPageSchema),
  });

  const onSubmit = (data: { [key: string]: any; }) => {
    const eventPhoto = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];

      if (value[0] && typeof value !== "string") {
        Array.from(value as File[]).forEach((val) => {
          eventPhoto.append(key, val);
        });
      } else {
        eventPhoto.append(key, value);
      }
    });
    postPhoto(eventPhoto);
    reset();
  }

  return (
    <div className={styles.body}>
      <div className={styles.main_container}>
        <AdminNavbar />
        <form className={styles.photo_content} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.content_fileInput}>
            <div className={styles.fileInputTitleWrapper}>
              <h2 className={styles.fileInputTitle}>{title}</h2>
            </div>
            <FileInput title={title} name={fileName} register={register} fileIcon={fileIcon} addFileTitle={addFileTitle} />
            <FileInputLink name={fileLinkName} register={register} error={errors.adsads} />
          </div>
          <div className={styles.content_textInputs}>
            <TextInput title={institutionName} name={pubName} register={register} error={errors.pubname} />
            <TextInput title={partyName} name={party} register={register} error={errors.eventname} />
            <TextInput title={job} name={jobName} register={register} error={errors.photographer} />
            <TextInput title={date} name={dateName} register={register} error={errors.date} />
            <ViewsSlider name={viewsName} register={register} />
            <PublishBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPhotoPage;