import React from 'react';
import st from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={st.container}>
                <div className={st.MainInfo}>
                    <h2 className={st.MainInfoHeader}><span className={st.Span}>GEO</span>GAP</h2>
                    <p className={st.MainInfoTxt}>
                        Сервис, позволяющий в игровой форме проверить свои познания в географии.
                    </p>
                </div>
                <div className={st.Section}>
                    <h2 className={st.SectionHeader}>Разделы</h2>
                    <ul className={st.SectionList}>
                        <li className={st.SectionEl}>Угадайка</li>
                        <li className={st.SectionEl}>Укажи точку</li>
                        <li className={st.SectionEl}>Кроссворд</li>
                    </ul>
                </div>
                <div className={st.Contacts}>
                    <h2 className={st.ContactsHeader}>Контакты</h2>
                    <ul className={st.ContactsList}>
                        <li className={st.ContactsEl}>noreply@gmail.com</li>
                        <li className={st.ContactsEl}>Россия, г.Ростов-на-Дону, <span className={st.ContactSpan}>пл.Гагарина 1</span></li>
                        <li className={st.ContactsEl}>+7(800)555-35-35</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;