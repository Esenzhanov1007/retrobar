import React, {FC} from 'react';
import styles from "./TextInput.module.scss";

interface TextInputProps{
  title: string;
  name: string;
  register: (a: string) => {};
  error: {} | undefined;
}

const TextInput: FC<TextInputProps> = ({ title, name, register, error }) => {
  return (
    <div className={styles.textInputs}>
      <h2 className={styles.textInputsTitle}>{title}</h2>
      <span>{error ? "Поле обязательно к заполнению!" : ""}</span>
      <input type="text" className={styles.textInput} {...register(name)} /> 
    </div>
  );
};

export default TextInput;