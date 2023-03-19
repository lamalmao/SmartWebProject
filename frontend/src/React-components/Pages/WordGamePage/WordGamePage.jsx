import React from 'react';
import st from './WordGamePage.module.css';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import map from './Images/map.png';
import time from './Images/time.png';
import place from './Images/place.png';
import award from './Images/award.png';


const WordGamePage = () => {
    return (
        <div className=''>
            <section className={st.map}>
                <div className={st.map__text}>ВЕРНО!</div>
                <img src={map} alt="Map of the World" className={st.map} />
            </section>
            <section className={st.interface}>
                <div className={st.interface__container}>
                    <div className={st.interface__block}>
                        <div className={st.interface__item}>
                            <img src={award} alt="Score" className={st.interface__icon} />
                            <div className={st.interface__score}>2700</div>
                        </div>
                    </div>
                    <div className={st.interface__block}>
                        <form action="/" className={st.interface__form}>
                            <label className={st.interface__label} htmlFor="">
                                <input className={st.interface__input} type="text" placeholder='Название страны' />
                            </label>
                            <MButtonForm style={{ letterSpacing: "normal", marginRight: "50px", }}>ПОДТВЕРДИТЬ</MButtonForm>
                            <div className={st.interface__item}>
                                <img src={time} alt="Time" className={st.interface__icon} />
                                <div className={st.interface__text}>12:02</div>
                            </div>
                        </form>
                        <p className={st.interface__paragraph}>
                            Ввести в текстовое поле текст, соответствующий подсвеченному на карте объекту. Заданием могут быть предусмотрены несколько вариантов допустимого ответа.
                        </p>
                    </div>
                </div>
                <div className={st.interface__containerNew}>
                    <div className={st.interface__counter}>
                        <div className={st.interface__current}>1 / </div>
                        <div className={st.interface__total}>15</div>
                    </div>
                    <MButtonForm style={{ letterSpacing: "normal" }}>ПРОПУСТИТЬ</MButtonForm>
                </div>
            </section>
        </div>
    );
};

WordGamePage.propTypes = {};

export default WordGamePage;
