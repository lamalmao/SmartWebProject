import React from 'react';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MCheckbox from '../../UI-Components/MCheckbox/MCheckbox';
import MInput from '../../UI-Components/MInput/MInput';
import MSelect from '../../UI-Components/MSelect/MSelect';
import AuthForm from '../AuthForm/AuthForm';
import st from './QuizForm.module.css'

const QuizForm = () => {
    return (
        <AuthForm>
            <label className={st.Label}> 
            <span className={st.Span}>Создайте</span> свой собственный квиз
            </label>
            <MSelect 
            style={{marginBottom:'25px'}}
            />
              <MInput
              style={{marginBottom:'25px'}}
              type='text'
              placeholder='Описание'
              />
              <MInput
              style={{marginBottom:'25px'}}
              placeholder='Название'
              type='text'
              />
              <MInput
              style={{marginBottom:'25px'}}
              type='number'
              placeholder='Количество вопросов'
              />
               <div className={st.BottomForm}>
               <MCheckbox>Публичный квиз</MCheckbox>
               <MButtonForm>
                  Далее
                </MButtonForm>
               </div>
        </AuthForm>
    );
};

export default QuizForm;