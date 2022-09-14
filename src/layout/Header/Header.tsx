import React, {useState} from 'react';
import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import star from '../../assets/icons/bigstarburger.svg'
import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.scss'
import SearchForm from "../search-form/SearchForm";
import {FcMenu} from "react-icons/all";
import HamburgerMenu from "./components/HamburgerMenu";



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

const Header = () => {
    const [open, setOpen] = useState(false);


    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>
                        <Link to='/'>
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <nav className={styles.menu}>
                        {data.map((item, index) => (
                            <NavLink key={index} to={item.path}
                                     className={({isActive}) => isActive ? styles.menu__link__active : styles.menu__link}>{item.label}</NavLink>
                        ))}
                        <button className={styles.menu__btn}>
                            <img onClick={() => setOpen(!open)} src={search} alt=""/>
                        </button>
                        <HamburgerMenu />
                        <img className={styles.star} src={star} alt="star"/>
                    </nav>
                </div>
                <div className={styles.search__input}>
                    {open && <SearchForm className={styles.search__form}/>}
                </div>
            </div>
        </header>
    );
};

export default Header;