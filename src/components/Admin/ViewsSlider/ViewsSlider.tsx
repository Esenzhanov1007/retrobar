import React, { FC, useState } from 'react';
import styles from "./ViewsSlider.module.scss";

interface viewsProps {
  name: string;
  register: (a: string) => {};
}

const ViewsSlider: FC<viewsProps> = ({name, register}) => {

  const [value, setValue] = useState(2);

  return (
    <div className={styles.viewsInputWrapper}>
      <h2 className={styles.viewsInputTitle}>Просмотры</h2>
      <div className={styles.viewsInputValues}>
        <h4 
        className={value == 2 ? styles.viewsInputValueActive : styles.viewsInputValue} 
        onClick={() => {
          setValue(2);
        }}
        >x2</h4>
        <h4 
        className={value == 3 ? styles.viewsInputValueActive : styles.viewsInputValue} 
        onClick={() => {
          setValue(3);
        }}
        >x3</h4>
      </div>
      <input 
      className={styles.viewsInput}
      type="range"
      min={2}
      max={3}
      value={value}
      style={{background: `linear-gradient(to right, rgba(255,176,59,1) 0%, rgba(255,176,59,1) ${(value - 2) * 100}%, rgb(200, 200, 200) ${(value - 2) * 100}%, rgba(153,153,153,1) 100%)`}}
      {...register(name)}
      onChange={(e) => {
        setValue(Number(e.target.value));
      }} 
      />
    </div>
  );
};

export default ViewsSlider;