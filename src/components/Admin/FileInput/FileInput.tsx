import React, {FC} from 'react';
import styles from "./FileInput.module.scss";

interface FileInputProps {
  title: string;
  fileIcon: string;
  addFileTitle: string;
  register: (a: string) => {};
  name: string;
}

const FileInput: FC<FileInputProps> = ({fileIcon, addFileTitle, register, name}) => {
  return (
    <>
      <div className={styles.fileInputWrapper}>
      <input
        type="file" 
        id="input_img"
        className={styles.fileInput}
        {...register(name)}
        multiple/>
      <label htmlFor="input_img" className={styles.fileInputBtn} >
        <span className={styles.fileInputIconWrapper}>
          <img className={styles.fileInputIcon} 
          src={fileIcon}
          alt='Выбрать файл' 
          />
        </span>
        <span className={styles.fileInputBtnText}>
          {addFileTitle}
        </span>
      </label>
      </div>
    </>
  );
};

export default FileInput;