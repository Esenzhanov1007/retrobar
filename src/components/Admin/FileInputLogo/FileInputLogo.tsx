import React, { FC } from 'react';
import FileInputLink from '../FileInputLink/FileInputLink';
import styles from "./FileInputLogo.module.scss";

interface LogoInputProps {
  addLogoTitle: string;
  logoIcon: string;
  register: (a: string) => {};
  name: string;
}

const FileInputLogo:FC <LogoInputProps> = ({addLogoTitle, logoIcon, register, name}) => {

  const logoLink = "logoLink";
  const website = undefined;

  return (
    <div className={styles.logoContentWrapper}>
      <div className={styles.logoInputWrapper}>
      <input 
        type="file"
        id="input_img2"
        className={styles.logoInput}
        {...register(name)}
        multiple/>
      <label htmlFor="input_img2" className={styles.logoInputBtn}>
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
      <FileInputLink name={logoLink} register={register} error={website} />
    </div>
  );
};

export default FileInputLogo;