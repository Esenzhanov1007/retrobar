import React from 'react';
import styles from './SearchForm.module.sass';

interface Props {
  [key: string]: string;
  className: string;
}

const SearchForm = (props: Props) => {
  return (
    <div className={[styles.search, props.className].join(' ')}>
      <input className={styles.search__form_input} type="text" placeholder="поиск"/>
      <button className={styles.search__form_btn}>Поиск</button>
    </div>
  );
};

export default SearchForm;
