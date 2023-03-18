import React from 'react';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import Telegram from './Telegram.svg'
import Mail from './Mail.svg'
import st from './TgForm.module.css'

const TgForm = ({redirTelegram, redirMail}) => {
    return (
       <div className={st.BLobk}>
          <label className={st.Label}> 
            <span className={st.Span}> Зарегистрируйтесь </span>, чтобы создавать викторины
            </label>
              <div className={st.buttonCont}>
              <MButtonForm onClick={redirTelegram} surs={Telegram}>
                  РЕГИСТРАЦИЯ
                </MButtonForm>
                <MButtonForm 
                onClick={redirMail}
                style={{background:'linear-gradient(270deg, #03DCFE 0%, #3967FF 102.46%)'}}
                surs={Mail}>
                  РЕГИСТРАЦИЯ
                </MButtonForm>
              </div>
              
              </div>
               
       
    );
};
export default TgForm;