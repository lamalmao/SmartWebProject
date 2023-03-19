import React from 'react';
import st from './PointGamePage.module.css';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import map from './Images/map.png';
import time from './Images/time.png';
import place from './Images/place.png';
import award from './Images/award.png';


const PointGamePage = () => {
    return (
        <div className=''>
            <section className={st.map}>
                <div className={st.map__text}>НЕВЕРНО!</div>
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
                        <div className={st.interface__item}>
                            <img src={place} alt="Place" className={st.interface__icon} />
                            <div className={st.interface__text}>Turkey</div>
                        </div>
                        <div className={st.interface__item}>
                            <img src={time} alt="Time" className={st.interface__icon} />
                            <div className={st.interface__text}>12:02</div>
                        </div>
                    </div>
                    <div className={st.interface__block}>
                        <p className={st.interface__paragraph}>
                            Необходимо указать на карте точку, наиболее близкую к правильному местоположению. Количество баллов обратно пропорционально расстоянию до правильного местоположения.
                        </p>
                    </div>
                </div>
                <div className={st.interface__containerNew}>
                    <div className={st.interface__counter}>
                        <div className={st.interface__current}>1 / </div>
                        <div className={st.interface__total}>15</div>
                    </div>
                    <MButtonForm>ПРОПУСТИТЬ</MButtonForm>
                </div>
            </section>
        </div>
    );
};

PointGamePage.propTypes = {};

export default PointGamePage;
