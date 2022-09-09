import React, { useState } from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminContactsPage.module.scss";
import fileIcon from "../../assets/Admin/Photo/addImage.svg";
import FileInput from '../../components/Admin/FileInput/FileInput';
import FileInputLink from '../../components/Admin/FileInputLink/FileInputLink';
import TextInput from '../../components/Admin/TextInput/TextInput';
import Textarea from '../../components/Admin/Textarea/Textarea';
import ContactsInputLink from '../../components/Admin/ContactsInputLink/ContactsInputLink';
import SocialsInput from '../../components/Admin/SocialsInput/SocialsInput';
import telegramIcon from "../../assets/Admin/ContactsPage/telegramIcon.svg";
import instagramIcon from "../../assets/Admin/ContactsPage/instagramIcon.svg";
import youtubeIcon from "../../assets/Admin/ContactsPage/youtubeIcon.svg";
import PublishBtn from '../../components/Admin/PublishBtn/PublishBtn';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactsSchema } from './ContactsValidation';

const AdminContactsPage = () => {

  const title = "Контакты";
  const addFileTitle = "Добавить картинки";
  const textareaTitle = "О нас";
  const inputTitle = "Номер";
  const socialsTitle = "Социальные сети";
  const telegram = "Telegram";
  const instagram = "Instagram";
  const youtube = "YouTube";
  const aboutUs = "aboutus";
  const phone = "phone";

  const [data, setData] = useState({});

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(contactsSchema),
  });

  const onSubmit = (data: {}) => {
    setData(data);
    reset();
  }

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <form className={styles.contentWrapper} onSubmit={handleSubmit(onSubmit)} >
        <div className={styles.contacts_content} >
          <div className={styles.content_fileInput}>
            <div className={styles.fileInputTitleWrapper}>
              <h2 className={styles.fileInputTitle}>{title}</h2>
            </div>
            <FileInput title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
            <FileInputLink />
          </div>
          <div className={styles.content_textInputs}>
            <Textarea title={textareaTitle} name={aboutUs} register={register} error={errors.aboutus} />
            <TextInput title={inputTitle} name={phone} register={register} error={errors.phone} />
            {/* <TextInput title={inputTitle} name={time} register={register} error={errors.time} /> */}
            <ContactsInputLink />
          </div>
        </div>
        <div className={styles.contactsSocials}>
          <div className={styles.socialsTitleWrapper}>
            <h2 className={styles.socialsTitle}>{socialsTitle}</h2>
          </div>
          <div className={styles.socialsInputsWrapper}>
            <SocialsInput title={telegram} socialsIcon={telegramIcon} />
            <SocialsInput title={youtube} socialsIcon={youtubeIcon} />
            <SocialsInput title={instagram} socialsIcon={instagramIcon} />
            <PublishBtn />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminContactsPage;