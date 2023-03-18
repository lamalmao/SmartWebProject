import React from 'react';
import st from './QuizItem.module.css'
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm'
import Bpan from '../../Pages/MainPage/Images/BPan.png'
const QuizItem = ({title, disc, quests, points}) => {
    return (
        <div className={st.QuizItem}>
            <div className={st.DiscPicBlock}>
                <img className={st.PicQuizItem} src={Bpan} alt="" />
                <div className={st.DiscTitle}>
                    <h2 className={st.Header}>Экскурсия по Азии</h2>
                    <p className={st.Disc}>Это пробная карточка одно из квизов и описание к нему, где можно расскаазать, о чём будет квиз.</p>
                </div>
            </div>
            <div className={st.InteractiveBlock}>
                <MButtonForm>ИЗМЕНИТЬ</MButtonForm>
                <p className={st.QuestsAndPoints}>{quests} вопросов, {points} баллов</p>
            </div>
        </div>
    );
};

export default QuizItem;