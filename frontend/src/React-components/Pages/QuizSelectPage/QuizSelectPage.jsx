import React from 'react';
import st from './QuizSelectPage.module.css';
import MInput from '../../UI-Components/MInput/MInput'
import QuizList from '../../Components/QuizList/QuizList';
const QuizSelectPage = () => {
    return (
        <div className={st.MainQuizPage}>
            <div className={st.SearchBlock}>
                <h2 className={st.SearchBlockHeader}>НАЙДИТЕ МНОГО УВЛЕКАТЕЛЬНЫХ ИГР</h2>
                    <MInput 
                    style={{marginTop:'25px',marginBottom:'25px'}}
                    placeholder='Введите название'
                    type='text'
                    />
                    <p className={st.SearchBlockDisc}>Воспользуйтесь поиском, чтобы найти квизы своих друзей и посоревноваться в знаниях географических объектов!</p>
            </div>
            <div>
                <QuizList/>
            </div>
        </div>
    );
};

export default QuizSelectPage;