import React, { useState } from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import FileInput from '../../components/Admin/FileInput/FileInput';
import styles from "./AdminVideoPage.module.scss";
import fileIcon from "../../assets/Admin/VideoPage/addVideo.svg";
import FileInputLink from '../../components/Admin/FileInputLink/FileInputLink';
import TextInput from '../../components/Admin/TextInput/TextInput';
import ViewsSlider from '../../components/Admin/ViewsSlider/ViewsSlider';
import PublishBtn from '../../components/Admin/PublishBtn/PublishBtn';
import { yupResolver } from '@hookform/resolvers/yup';
import { videoPageSchema } from './VideoPageValidation';
import { useForm } from 'react-hook-form';
import { useAddVideoMutation } from '../../store/features/Admin/Video/VideoQuery';

const AdminVideoPage = () => {

  const title = "Видео";
  const addFileTitle = "Добавить видео";
  const institutionName = "Название заведения";
  const partyName = "Название вечеринки";
  const job = "Видеограф";
  const date = "Дата";
  const pubName = "pub";
  const party = "party";
  const jobName = "job";
  const dateName = "date";
  const fileName = "eventvideos";
  const viewsName = "multiplier";
  const fileLinkName = "adsads";

  const [ postVideo ] = useAddVideoMutation();

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(videoPageSchema),
  });

  const onSubmit = (data: { [key: string]: any; }) => {
    console.log(data);
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
    postVideo(eventPhoto);
    reset();
  }

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.video_content}>
        <div className={styles.content_fileInput}>
          <div className={styles.fileInputTitleWrapper}>
            <h2 className={styles.fileInputTitle}>{title}</h2>
          </div>
          <FileInput name={fileName} register={register} title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
          <FileInputLink name={fileLinkName} register={register} error={errors.adsads} />
        </div>
        <div className={styles.content_textInputs}>
          <TextInput title={institutionName} name={pubName} register={register} error={errors.pub} />
          <TextInput title={partyName} name={party} register={register} error={errors.party} />
          <TextInput title={job} name={jobName} register={register} error={errors.job} />
          <TextInput title={date} name={dateName} register={register} error={errors.date} />
          <ViewsSlider name={viewsName} register={register} />
          <PublishBtn />
        </div>      
    </form>
    </div>
  );
};

export default AdminVideoPage;