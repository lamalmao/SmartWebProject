import React from 'react';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MInput from '../../UI-Components/MInput/MInput';
import AuthForm from '../AuthForm/AuthForm';
import st from './MailForm.module.css'
const MailForm = ({...props}) => {
    return (
       
        <AuthForm {...props}>
          <label className={st.Label}> 
            <span className={st.Span}> Зарегистрируйтесь </span>, чтобы создавать викторины
            </label>
            <MInput
            style={{marginBottom:'25px'}}
            type='text'
            placeholder='Имя пользователя'
            />
              <MInput
              style={{marginBottom:'25px'}}
              type='text'
              placeholder='Электронная почта'
              />
              <MInput
              style={{marginBottom:'25px'}}
              placeholder='Пароль'
              type='password'
              />
               <MButtonForm>
                  РЕГИСТРАЦИЯ
                </MButtonForm>
              
              </AuthForm> 
              
               
       
    );
};
export default MailForm;