import React from 'react';
import st from './ProfilePage.module.css';
import ModalWindow from '../../UI-Components/ModalWindow/ModalWindow';
import QuizForm from '../../Components/QuizForm/QuizForm';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MCheckbox from '../../UI-Components/MCheckbox/MCheckbox';
import AvatarPic from './Images/avatar.svg';
import WreathPic from './Images/wreath.svg';
import WrenchPic from './Images/wrench.svg';
import Tabs from '../../Components/Tabs/Tabs';


const ProfilePage = () => {
    return (
        <div className={st.container}>
            <article className={st.profile}>
                <ModalWindow><QuizForm /></ModalWindow>
                <img className={st.profile__avatar} src={AvatarPic} alt="avatar" />
                <div className={st.profile__info}>
                    <div className={st.profile__content}>
                        <h2 className={st.profile__name}>ИВАН ИВАНОВ</h2>
                        <div className={st.profile__mail}>example@gmail</div>
                        <div className={st.profile__status}>Реально мощнейший статус пользователя, чтобы все знали, кто здесь батя</div>
                        <div className={st.profile__statistic}>
                            <div className={st.profile__group}>
                                <img className={st.profile__icon} src={WreathPic} alt="icon" />
                                <div className={st.profile__count}>12</div>
                            </div>
                            <div className={st.profile__group}>
                                <img className={st.profile__icon} src={WrenchPic} alt="icon" />
                                <div className={st.profile__count}>2</div>
                            </div>
                        </div>
                    </div>
                    <div className={st.profile__functions}>
                        <MButtonForm style={{ textTransform: "uppercase" }}>Редактировать</MButtonForm>
                        <div className={st.profile__admin}>
                            <div className={st.profile__text}>Администратор</div>
                            <MCheckbox></MCheckbox>
                        </div>
                    </div>
                </div>
            </article>
            <Tabs />
        </div>
    );
};

export default ProfilePage;
