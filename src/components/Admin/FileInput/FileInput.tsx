import React, {FC} from 'react';
import styles from "./FileInput.module.scss";

interface FileInputProps {
  title: string;
  fileIcon: string;
  addFileTitle: string;
}

const FileInput: FC<FileInputProps> = ({title, fileIcon, addFileTitle}) => {
  return (
    <>
      <div className={styles.fileInputWrapper}>
      <input
        name='file' 
        type="file" 
        id="input_img" 
        className={styles.fileInput}
        multiple/>
      <label htmlFor="input_img" className={styles.fileInputBtn}>
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