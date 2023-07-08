import './footer.scss'
import Container from "@/app/components/Container/Container";
import Image from "next/image";
import {BiSolidMessageDetail} from "react-icons/bi";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <Container>
                <div className="footer__row">
                    <ul className="footer__list">
                        <li className="footer__item-title">Меню компании</li>
                        <li className="footer__item">Что такое Oner</li>
                        <li className="footer__item">Реквизиты и информация</li>
                        <li className="footer__item">Новости</li>
                        <li className="footer__item">Вакансии</li>
                        <li className="footer__item">Поставщикам</li>
                        <li className="footer__item">Контакты</li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__item-title">Каталоги</li>
                        <li className="footer__item">Оригинальные запчасти</li>
                        <li className="footer__item">Неоригинальные запчасти</li>
                        <li className="footer__item">Запчасти для ТО</li>
                        <li className="footer__item">Автомасла</li>
                        <li className="footer__item">Аккумуляторы</li>
                        <li className="footer__item">Распродажа</li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__item-title">Помощь</li>
                        <li className="footer__item">Часто задаваемые вопросы</li>
                        <li className="footer__item">Консультация Online</li>
                        <li className="footer__item">Оплата заказа</li>
                        <li className="footer__item">Доставка заказа</li>
                        <li className="footer__item">Возврат товара</li>
                        <li className="footer__item">Забыл пароль</li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__item-title">Товары и бренды</li>
                        <li className="footer__item">Список брендов</li>
                        <li className="footer__item">Популярные товары</li>
                        <li className="footer__item">Наличие на складах</li>
                    </ul>

                    <div className="footer__block">
                        <button className="footer__btn" type={"button"}>
                            <span className="footer__btn-span"><BiSolidMessageDetail/> Консультация Online</span>
                            Задавайте вопросы
                        </button>
                    </div>

                </div>
            </Container>



           <Container>
               <div className="footer__copyright">
                   <p className="footer__copyright-title">Copyright © ООО «Oner.ru» 2021. All rights reserved.</p>

                   <div className="footer__copyright-buy">
                       Принимаем к оплате
                       <Image src="" alt="" className="footer__copyright-img"/>
                       <Image src="" alt="" className="footer__copyright-img"/>
                       <Image src="" alt="" className="footer__copyright-img"/>
                   </div>

                   <div className="footer__copyright-row">
                       <p className="footer__copyright-confidentiality">Оферта</p>
                       <p className="footer__copyright-confidentiality">Конфиденциальность</p>
                   </div>
               </div>
           </Container>

        </footer>
    );
};

export default Footer;