import React from 'react';
import QuizItem from '../QuizItem/QuizItem';

import st from './QuizList.module.css'

const QuizList = (props) => {
  
    return (
        <div className={st.QuizList}>
            {props.sortedAndSearchedQuiz.map(quiz=>
                    <QuizItem quiz={quiz} key={quiz.id}/>
                    )}
        </div>
    );
};


export default QuizList;