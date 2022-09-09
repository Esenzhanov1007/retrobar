import React, {FC} from 'react';
import styles from "./PhoneInput.module.scss";

interface PhoneInputProps {
  title: string,
  name: string,
  register: (a: string) => {},
  error: {} | undefined,
}

const PhoneInput: FC<PhoneInputProps> = ({title, name, error, register}) => {
  return (
    <div className={styles.phoneInputs}>
      <h2 className={styles.phoneInputsTitle}>{title}</h2>
      <span>{error ? "Поле обязательно к заполнению!" : ""}</span>
      <input type="tel" className={styles.phoneInput} {...register(name)} />
  </div>
  );
};

export default PhoneInput;