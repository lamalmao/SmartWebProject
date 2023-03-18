import React from 'react';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MInput from '../../UI-Components/MInput/MInput';
import AuthForm from '../AuthForm/AuthForm';
import st from './CodeTelegramForm.module.css'

const CodeTelegramForm = ({...props}) => {
    return (
        <AuthForm {...props}>
        <label className={st.Label}> 
          <span className={st.Span}> Перейдите  </span> в телеграм бота по <a target='_blank' href="" className={st.Link}>ссылке</a> и <span className={st.Span}>Введите</span> код
          </label>
          <MInput
          style={{marginBottom:'25px'}}
          type='number'
          placeholder='Код'
          />
             <MButtonForm >
                РЕГИСТРАЦИЯ
              </MButtonForm>
            </AuthForm> 
    );
};

export default CodeTelegramForm;