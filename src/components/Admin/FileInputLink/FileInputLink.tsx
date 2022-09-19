import React, { FC } from 'react';
import styles from "./FileInputLink.module.scss"
import linkIcon from "../../../assets/Admin/Photo/link.svg";

interface FileInputLinkProps {
  register: (a: string) => {};
  name: string;
  error: {} | undefined;
}

const FileInputLink: FC<FileInputLinkProps> = ({register, name, error}) => {
  return (
    <div className={styles.fileInputLinkWrapper} >
      <h4 className={styles.fileInputLinkTitle}>Вставить ссылку<img className={styles.fileInputLinkIcon} src={linkIcon} /></h4>
      <span>{error ? "Поле обязательно к заполнению!" : ""}</span>
      <input type="text" className={styles.fileInputLink} {...register(name)} />
    </div>
  );
};

export default FileInputLink;