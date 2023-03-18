import React from 'react';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MInput from '../../UI-Components/MInput/MInput';
import AuthForm from '../AuthForm/AuthForm';
import st from './MailForm.module.css'
const MailForm = ({handleSubmitAndRedirCodeMail, valueUsername, valueMail, valuePassword,onchHandler}) => {
    
      
      return (
       
        <AuthForm onSubmit={handleSubmitAndRedirCodeMail}>
          <label className={st.Label}> 
            <span className={st.Span}> Зарегистрируйтесь </span>, чтобы создавать викторины
            </label>
            <MInput
            name='username'
            onChange={onchHandler}
            value={valueUsername}
            style={{marginBottom:'25px'}}
            type='text'
            placeholder='Имя пользователя'
            />
              <MInput
              name='email'
              onChange={onchHandler}
              value={valueMail}
              style={{marginBottom:'25px'}}
              type='email'
              placeholder='Электронная почта'
              />
              <MInput
              name='password'
              onChange={onchHandler}
              value={valuePassword}
              style={{marginBottom:'25px'}}
              placeholder='Пароль'
              type='password'
              />
               <MButtonForm type='submit' >
                  РЕГИСТРАЦИЯ
                </MButtonForm>
              
              </AuthForm> 
              
               
       
    );
};
export default MailForm;