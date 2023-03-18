import React from 'react';
import st from './QuizItem.module.css'
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm'
const QuizItem = (props) => {
    return (
        <div className={st.QuizItem}>
            <div className={st.DiscPicBlock}>
                <img className={st.PicQuizItem} src={props.quiz.imgSRC} alt="" />
                <div className={st.DiscTitle}>
                    <h2 className={st.Title}>{props.quiz.title}</h2>
                    <p className={st.Disc}>{props.quiz.disc}</p>
                </div>
            </div>
            <div className={st.InteractiveBlock}>
                <MButtonForm>ИЗМЕНИТЬ</MButtonForm>
                <p className={st.QuestsAndPoints}>{props.quiz.quests} вопросов, {props.quiz.points} баллов</p>
            </div>
        </div>
    );
};

export default QuizItem;