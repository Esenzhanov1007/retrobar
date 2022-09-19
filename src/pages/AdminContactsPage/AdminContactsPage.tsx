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
import { useAddContactsMutation } from '../../store/features/Admin/Contacts/ContactsApi';

const AdminContactsPage = () => {

  const title = "Контакты";
  const addFileTitle = "Добавить картинки";
  const textareaTitle = "О нас";
  const inputTitle = "Номер";
  const socialsTitle = "Социальные сети";
  const telegram = "telegram";
  const instagram = "instagram";
  const youtube = "youtube";
  const aboutUs = "info";
  const phone = "phone";
  const email = "email";
  const fileName = "photo";
  const logoLink = "logoLink";
  const telegramTitle = "Telegram";
  const instagramTitle = "Instagram";
  const youtubeTitle = "YouTube";

  const [data, setData] = useState({});

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(contactsSchema),
  });

  const [addContact] = useAddContactsMutation();

  const onSubmit = (data: { [key: string]: any; }) => {
    const phone = data.phone;
    data.phone = JSON.stringify([phone]);
    delete data.logoLink;
    
    const contact = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value[0] && typeof value !== "string" && typeof value[0] !== "string") {
        Array.from(value as File[]).forEach((val) => {
          contact.append(key, val);
        });
      } else {
        contact.append(key, value);
      }
    });
    addContact(contact);
    // reset();
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
            <FileInput name={fileName} register={register} title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
            <FileInputLink name={logoLink} register={register} error={errors.logoLink} />
          </div>
          <div className={styles.content_textInputs}>
            <Textarea title={textareaTitle} name={aboutUs} register={register} error={errors.info} />
            <TextInput title={inputTitle} name={phone} register={register} error={errors.phone} />
            <ContactsInputLink name={email} register={register} error={errors.email} />
          </div>
        </div>
        <div className={styles.contactsSocials}>
          <div className={styles.socialsTitleWrapper}>
            <h2 className={styles.socialsTitle}>{socialsTitle}</h2>
          </div>
          <div className={styles.socialsInputsWrapper}>
            <SocialsInput name={telegram} register={register} title={telegramTitle} socialsIcon={telegramIcon} error={errors.telegram} />
            <SocialsInput name={youtube} register={register} title={youtubeTitle} socialsIcon={youtubeIcon} error={errors.youtube} />
            <SocialsInput name={instagram} register={register} title={instagramTitle} socialsIcon={instagramIcon} error={errors.instagram} />
            <PublishBtn />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminContactsPage;