import React, {FC} from 'react';
import styles from "./SocialsInput.module.scss";

interface SocialsInputProps{
  title: string;
  socialsIcon: string;
  register: (a: string) => {};
  name: string;
  error: {} | undefined;
}

const SocialsInput:FC <SocialsInputProps> = ({title, socialsIcon, name, register, error}) => {
  return (
    <div className={styles.socialsInputs}>
      <h2 className={styles.socialsInputsTitle}>{title}<img className={styles.socialsIcon} src={socialsIcon} alt="socials" /></h2>
      <span>{error ? "Поле обязательно к заполнению!" : ""}</span>
      <input type="text" className={styles.socialsInput} {...register(name)} />
    </div>
  );
};

export default SocialsInput;