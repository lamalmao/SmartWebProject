import React from 'react';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MInput from '../../UI-Components/MInput/MInput';
import AuthForm from '../AuthForm/AuthForm';
import st from './CodeMailForm.module.css'

const CodeMailForm = ({...props}) => {
    return (
        <AuthForm {...props}>
        <label className={st.Label}> 
          <span className={st.Span}> Введите </span>код, который пришел вам на почту
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

export default CodeMailForm;