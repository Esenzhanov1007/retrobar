import styles from './NewsBlock.module.scss'
import polaroid from '../../../assets/icons/news/polaroid.png'
import photo from '../../../assets/icons/news/photo.png'
import tape1 from '../../../assets/icons/news/tape1.png'
import tape2 from '../../../assets/icons/news/tape2.png'
import tape3 from '../../../assets/icons/news/tape3.png'


const NewsBlock = () => {

    const data = [
        {
            title: 'Новость',
            text: 'Современные технологии достигли такого уровня, что перспективное планирование способствует\n' +
                '                            подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.',
            date: '01.04.2022',
            frame: polaroid,
            photo: photo
        }
    ]


    return (
        <section className={styles.news}>
            <div className={styles.news__container}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={styles.news__inner}>
                            <div className={styles.news__description}>
                                <h2 className={styles.news__title}>{item.title}</h2>
                                <p className={styles.news__text}>{item.text}</p>
                                <span className={styles.news__date}>{item.date}</span>
                            </div>
                                <img className={styles.news__polaroid} src={item.frame} alt="polaroid"/>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default NewsBlock;