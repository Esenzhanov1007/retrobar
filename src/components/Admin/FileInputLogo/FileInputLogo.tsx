import React, { FC } from 'react';
import FileInputLink from '../FileInputLink/FileInputLink';
import styles from "./FileInputLogo.module.scss";

interface LogoInputProps {
  addLogoTitle: string;
  logoIcon: string;
}

const FileInputLogo:FC <LogoInputProps> = ({addLogoTitle, logoIcon}) => {
  return (
    <div className={styles.logoContentWrapper}>
      <div className={styles.logoInputWrapper}>
      <input 
        name='file' 
        type="file" 
        id="input_img" 
        className={styles.logoInput}
        multiple/>
      <label htmlFor="input_img" className={styles.logoInputBtn}>
        <span className={styles.logoInputIconWrapper}>
          <img className={styles.logoInputIcon} 
          src={logoIcon}
          alt='Выбрать файл' 
          />
        </span>
        <span className={styles.logoInputBtnText}>
          {addLogoTitle}
        </span>
      </label>
      </div>
      <FileInputLink />
    </div>
  );
};

export default FileInputLogo;