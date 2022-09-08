import { useState, useRef } from 'react';
import logo from '../../../../assets/icons/logo.svg'
import styles from './styles.module.scss';
import classNames from 'classnames';
import HamburgerIcon from './HamburgerIcon';
import telegram from '../../../../assets/icons/telegram.svg'
import instagram from '../../../../assets/icons/instagram.svg'
import youtube from '../../../../assets/icons/youtube.svg'
import mail from '../../../../assets/icons/mail.svg'
import SearchForm from "../../../search-form/SearchForm";
import {Link} from "react-router-dom";

const data = [
    {
        path: '/photo',
        label: 'Фото'
    },
    {
        path: '/videos',
        label: 'Видео'
    },
    {
        path: '/institution',
        label: 'Заведение'
    },
    {
        path: '/events',
        label: 'События'
    },
    {
        path: '/news',
        label: 'Новости'
    },
    {
        path: '/contacts',
        label: 'Контакты'
    },
]

function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);

    return (
        <div className={styles.hamburger}>
            <HamburgerIcon isOpen={isOpen} setOpen={setOpen} />
            <div
                onClick={() => setOpen(false)}
                className={classNames(styles.menu, {
                    [styles.menuOpen]: isOpen === true
                })}
                ref={menuRef}
            >
                <div>
                    <div className={styles.logo__burger}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={styles.search__input}>
                        <SearchForm className={styles.search__form__burger} />
                    </div>
                    <ul className={styles.menu__list}>
                        {data.map(item => (
                            <li className={styles.menu__item} key={item.path}>
                                <Link to={item.path} className={styles.menu__link} onClick={() => setOpen(false)}>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.social__text}>
                        <h4>Мы в соицальных сетях:</h4>
                    </div>
                    <ul className={styles.social__images}>
                        <li className={styles.social__items}>
                            <a href=""><img src={telegram} alt=""/></a>
                        </li>
                        <li className={styles.social__items}>
                            <a href=""><img src={instagram} alt=""/></a>
                        </li>
                        <li className={styles.social__items}>
                            <a href=""><img src={youtube} alt=""/></a>
                        </li>
                        <li className={styles.social__items}>
                            <a href=""><img src={mail} alt=""/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
