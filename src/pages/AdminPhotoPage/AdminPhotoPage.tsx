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

const AdminPhotoPage = () => {

  const title = "Фото";
  const addFileTitle = "Добавить картинки";
  const institutionName = "Название заведения";
  const partyName = "Название вечеринки";
  const job = "Фотограф";
  const date = "Дата";
  const pubName = "pub";
  const party = "party";
  const jobName = "job";
  const dateName = "date";

  const [data, setData] = useState({});

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(photoPageSchema),
  });

  const onSubmit = (data: {}) => {
    setData(data);
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
            <FileInput title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
            <FileInputLink />
          </div>
          <div className={styles.content_textInputs}>
            <TextInput title={institutionName} name={pubName} register={register} error={errors.pub} />
            <TextInput title={partyName} name={party} register={register} error={errors.party} />
            <TextInput title={job} name={jobName} register={register} error={errors.job} />
            <TextInput title={date} name={dateName} register={register} error={errors.date} />
            <ViewsSlider />
            <PublishBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPhotoPage;