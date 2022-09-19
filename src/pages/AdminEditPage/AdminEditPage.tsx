import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminEditPage.module.scss";

const AdminEditPage = () => {
  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <div className={styles.edit_content}>
        <div className={styles.contentNavigation}>
          <h2 className={styles.navigationTitle}>Изменить</h2>
          <div className={styles.navigationButtons}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditPage;