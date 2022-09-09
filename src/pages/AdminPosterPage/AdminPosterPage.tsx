import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import { ADMIN_ADVERTISING_PAGE, ADMIN_POSTER_PAGE } from '../../consts/consts';
import styles from './AdminPosterPage.module.scss';
import fileIcon from "../../assets/Admin/AdvertisingPage/bannerIcon.svg";
import { Link } from 'react-router-dom';
import PublishBtn from '../../components/Admin/PublishBtn/PublishBtn';
import FileInputLink from '../../components/Admin/FileInputLink/FileInputLink';
import BannerInput from '../../components/Admin/BannerInput/BannerInput';

const AdminPosterPage = () => {

  const title = "Реклама";
  const addFileTitle = "Добавить баннер";

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <div className={styles.advertising_content}>
        <div className={styles.content_fileInput}>
          <div className={styles.fileInputTitleWrapper}>
            <Link to={ADMIN_ADVERTISING_PAGE} className={styles.fileInputTitle}>{title} </Link>
            <Link to={ADMIN_POSTER_PAGE} className={styles.fileInputTitle2}>/ Афиша</Link>
          </div>
          <BannerInput title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
          <div className={styles.FileInputLinkWrapper}>
            <FileInputLink />
          </div>
          <PublishBtn />
        </div>
      </div>
    </div>
  );
};

export default AdminPosterPage;