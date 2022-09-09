import React, {FC, useEffect, useRef, useState} from 'react';
import styles from "./Textarea.module.scss";

interface TextareaProps {
  title: string,
  name: string,
  register: (a: string) => {},
  error: {} | undefined,
}

const Textarea: FC<TextareaProps> = ({title, name, register, error}) => {

  function handleHeight(e: any) {
    e.target.style.height = "0px";
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = scrollHeight + "px";
  }

  return (
    <div className={styles.textareaWrapper}>
      <h2 className={styles.textareaTitle}>{title}</h2>
      <span>{error ? "Поле обязательно к заполнению!" : ""}</span>
      <textarea 
      {...register(name)}
      className={styles.textarea}
      onChange={e=>{
        handleHeight(e);
      }}
      />
    </div>
  );
};

export default Textarea;