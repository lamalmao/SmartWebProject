import React from 'react';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MInput from '../../UI-Components/MInput/MInput';
import AuthForm from '../AuthForm/AuthForm';
import Telegram from './Telegram.svg'
import Mail from './Mail.svg'
import st from './TgForm.module.css'

const TgForm = () => {
    return (
        <AuthForm>
          <label className={st.Label}> 
            <span className={st.Span}> Зарегистрируйтесь </span>, чтобы создавать викторины
            </label>
              <MInput
              style={{marginBottom:'25px'}}
              type='text'
              placeholder='Электронная почта'
              />  
              <div className={st.buttonCont}>
              <MButtonForm surs={Telegram}>
                  РЕГИСТРАЦИЯ
                </MButtonForm>
                <MButtonForm 
                style={{background:'linear-gradient(270deg, #03DCFE 0%, #3967FF 102.46%)'}}
                surs={Mail}>
                  РЕГИСТРАЦИЯ
                </MButtonForm>
              </div>
              </AuthForm> 
              
               
       
    );
};
export default TgForm;