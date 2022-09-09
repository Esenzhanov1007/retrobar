import styles from './InstitutionFilm.module.scss';
import photo from '../../../assets/InstitutionPage/images/photo.jpg';
import photo2 from '../../../assets/InstitutionPage/images/photo-2.jpg';
import geotag from '../../../assets/InstitutionPage/icons/geotag.png';
import clock from '../../../assets/InstitutionPage/icons/clock.png';
import phone from '../../../assets/InstitutionPage/icons/phone.png';
import bgr from '../../../assets/InstitutionPage/background.png';
import film from '../../../assets/InstitutionPage/film.png';
import tape1 from '../../../assets/InstitutionPage/tape 1.png';
import tape2 from '../../../assets/InstitutionPage/tape 2.png';
import React from "react";



const InstitutionFilm = () => {
  return (
      <div className={styles.institution__wrapper}>
          <img className={styles.institution__frame} src={film} alt=""/>
          <img className={styles.institution__bgr} src={bgr} alt=""/>
          <img className={styles.institution__bg} src={photo} alt=""/>
          <div className={styles.institution__about}>
              <div className={styles.institution__about__bgi}>
                  <h6 className={styles.institution__about__title}>MINIBAR</h6>
                  <div className={styles.institution__about__time}>
                      <img src={clock} alt=""/>
                      <p>18:00-06:00</p>
                  </div>
                  <div className={styles.institution__about__phone}>
                      <img src={phone} alt=""/>
                      <a href="tel:+996558550000">0 558 55 00 00</a>
                  </div>
                  <div className={styles.institution__about__geotag}>
                      <img src={geotag} alt=""/>
                      <p>Чынгыза Айтматова, 56</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default InstitutionFilm;
