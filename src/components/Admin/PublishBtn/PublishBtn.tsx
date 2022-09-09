import React from 'react';

import styles from "./PublishBtn.module.scss";

const PublishBtn = () => {
  return (
    <div className={styles.publishBtnWrapper}>
      <input type="submit" value="Опубликовать" className={styles.publishBtn} />
    </div>
  );
};

export default PublishBtn;