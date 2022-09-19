import React, { FC } from 'react';
import styles from "./ContactsInputLink.module.scss"
import linkIcon from "../../../assets/Admin/Photo/link.svg";

interface ContactsInputLinkProps {
  register: (a: string) => {};
  name: string;
  error: {} | undefined;
}

const ContactsInputLink: FC<ContactsInputLinkProps> = ({register, name, error}) => {
  return (
    <div className={styles.contactsInputLinkWrapper} >
      <h4 className={styles.contactsInputLinkTitle}>Вставить ссылку<img className={styles.contactsInputLinkIcon} src={linkIcon} /></h4>
      <span>{error ? "Поле обязательно к заполнению" : "" }</span>
      <input type="text" className={styles.contactsInputLink} {...register(name)} />
    </div>
  );
};

export default ContactsInputLink;