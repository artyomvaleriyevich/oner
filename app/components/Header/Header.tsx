import './header.scss'
import Container from "@/app/components/Container/Container";
import Link from "next/link";
import {FiPhoneCall} from "react-icons/fi";
import {FaRegUser} from "react-icons/fa";
import {BiSearch} from "react-icons/bi";
import Image from "next/image";

import headerLogo from '../../assets/header/header__logo.png'
import {FaLocationDot} from "react-icons/fa6";
import {PiDotsNine} from "react-icons/pi";
import {SlBasket} from "react-icons/sl";


const Header = () => {
    return (
        <header className={'header'}>
            <Container>
               <div className="header__row">
                   <Link href={'#'} className={'header__link'}>
                       <Image src={headerLogo} alt="headerLogo" className="header__link-img"/>
                   </Link>

                   <label className="header__label">
                       <BiSearch/>
                       <input placeholder={'Введите номер запчасти или VIN'} type="search" className="header__label-search"/>
                   </label>

                   <p className="header__street">
                       <FaLocationDot/>
                       Бишкек
                   </p>

                   <p className="header__phone">
                       <FiPhoneCall/>
                       +996 (555) 36-20-34
                   </p>

                   <button className="header__auth" type={'button'}>
                       <FaRegUser/>
                       Вход  /  Регистрация
                   </button>

               </div>

                <div className="header__nav">
                    <button className="header__nav-menu" type={"button"}>
                        <PiDotsNine/>
                        Все категории
                    </button>

                    <nav className="header__nav-row">
                        <li className="header__nav-item">
                            <Link href={'#'} className={'header__nav-link'}>Запчасти для ТО</Link>
                        </li>

                        <li className="header__nav-item">
                            <Link href={'#'} className={'header__nav-link'}>Автомасла</Link>
                        </li>

                        <li className="header__nav-item">
                            <Link href={'#'} className={'header__nav-link'}>Оригинальные запчасти</Link>
                        </li>

                        <li className="header__nav-item">
                            <Link href={'#'} className={'header__nav-link'}>Неоригинальные запчасти</Link>
                        </li>

                        <li className="header__nav-item">
                            <Link href={'#'} className={'header__nav-link'}>Лампочки</Link>
                        </li>

                        <li className="header__nav-item">
                            <Link href={'#'} className={'header__nav-link'}>Аккумуляторы</Link>
                        </li>
                    </nav>

                    <button type={"button"} className="header__nav-basket">
                        <SlBasket/>
                        Корзина
                    </button>
                </div>

            </Container>
        </header>
    );
};

export default Header;