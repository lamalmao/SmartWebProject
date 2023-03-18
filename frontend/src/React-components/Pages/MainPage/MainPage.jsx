import React from 'react';
import st from './MainPage.module.css'
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm'
import CupPic from './Images/Cup.svg'
import WrldPic from './Images/World.svg'
import LampPic from './Images/Lamp.svg'
import HappPic from './Images/Happ.svg'


const MainPage = () => {
    return (
        <div >
            <div className={st.panoramicInfoBlock}>
                <div className={st.AuthAndInfoBlock}>
                    <h2 className={st.AuthAndInfoBlockHeader}>ИССЛЕДУЙТЕ МИР ВОКРУГ СЕБЯ</h2>
                    <p className={st.AuthAndInfoBlockDisc}>Определяйте местоположение по фотографиям,
                        участвуйте в викторинах и веселитесь вместе с другими игроками</p>
                    <MButtonForm>
                        К ИГРАМ
                    </MButtonForm>
                </div>
            </div>
            <div className={st.FactsBlock}>

                <div className={st.FactsBlockGroupOne}>

                    <div className={st.World}>
                        <img src={WrldPic} alt="" className={st.WorldPic} />
                        <div className={st.WorldInfo}>
                            <h2 className={st.WorldInfoHeader}>Открывайте мир</h2>
                            <p className={st.WorldInfoDisc}>Исследуйте карту мира и проверяйте свои познания в географии.</p>
                        </div>
                    </div>

                    <div className={st.Lamp}>
                        <img src={LampPic} alt="" className={st.LampPic} />
                        <div className={st.LampInfo}>
                            <h2 className={st.LampInfoHeader}>Создавайте</h2>
                            <p className={st.LampInfoDisc}>Вы можете создавать викторины и задания для других игроков.</p>
                        </div>
                    </div>
                </div>

                <div className={st.FactsBlockGroupTwo}>

                    <div className={st.Cup}>
                        <img src={CupPic} alt="" className={st.CupPic} />
                        <div className={st.CupInfo}>
                            <h2 className={st.CupInfoHeader}>Соревнуйтесь</h2>
                            <p className={st.CupInfoDisc}>Друзья или незнакомцы могут стать вашими соперниками.</p>
                        </div>
                    </div>

                    <div className={st.Happ}>
                        <img src={HappPic} alt="" className={st.HappPic} />
                        <div className={st.HappInfo}>
                            <h2 className={st.HappInfoHeader}>Веселитесь</h2>
                            <p className={st.HappInfoDisc}>Играйте с друзьями и просто хорошо проводите время в нашей игре.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default MainPage;