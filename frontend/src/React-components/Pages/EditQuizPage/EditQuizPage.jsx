import React from 'react';
import st from './EditQuizPage.module.css';
import ModalWindow from '../../UI-Components/ModalWindow/ModalWindow';
import QuizForm from '../../Components/QuizForm/QuizForm';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MCheckbox from '../../UI-Components/MCheckbox/MCheckbox';
import PhotoPic from './Images/photo.svg';


const EditQuizPage = () => {
    return (
        <div className={st.container}>
            <section className={st.edit}>
                <img className={st.edit__img} src={PhotoPic} alt="photo" />
                <div className={st.edit__settings}>
                    <form className={st.edit__form} action="/">
                        <div className={st.edit__firstRow}>
                            <label htmlFor="" className={st.edit__nameLabel}>
                                <input className={st.edit__name} type="text" placeholder="Название экскурсии" required />
                            </label>
                            <label htmlFor="">
                                <input className={st.edit__reset} type="reset" value="Удалить" />
                            </label>
                        </div>
                        <div className={st.edit__secondRow}>
                            <label className={st.edit__textAreaLabel} htmlFor="">
                                <textarea className={st.edit__textArea} name="description" placeholder="Описание экскурсии" cols="30" rows="3" required></textarea>
                            </label>
                        </div>
                        <div className={st.edit__thirdRow}>
                            <label className={st.edit__numberLabel} htmlFor="">
                                <input className={st.edit__number} type="number" placeholder="Кол-во вопросов" min="1" required />
                            </label>
                            <label className={st.edit__listLabel} htmlFor="">
                                <select className={st.edit__list} name="type" required>
                                    <option className={st.edit__option} value="УГАДАЙКА">УГАДАЙКА</option>
                                    <option className={st.edit__option} value="УКАЖИ ТОЧКУ">УКАЖИ ТОЧКУ</option>
                                    <option className={st.edit__option} value="КРОССВОРД">КРОССВОРД</option>
                                </select>
                            </label>
                        </div>
                        <div className={st.edit__fourthRow}>
                            <MCheckbox></MCheckbox>
                            <div className={st.edit__type}>Публичный квиз</div>
                        </div>
                    </form>
                </div>
            </section>
            <form className={st.questions} action="/">
                <div className={st.questions__line}>
                    <div className={st.questions__col}>
                        <div className={st.questions__count}>1</div>
                        <div className={st.questions__inputs}>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="text" placeholder="Страна" required />
                            </label>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="number" placeholder="Баллы" min="1" required />
                            </label>
                        </div>
                    </div>
                    <div className={st.questions__col}>
                        <div className={st.questions__count}>2</div>
                        <div className={st.questions__inputs}>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="text" placeholder="Страна" required />
                            </label>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="number" placeholder="Баллы" min="1" required />
                            </label>
                        </div>
                    </div>
                    <div className={st.questions__col}>
                        <div className={st.questions__count}>3</div>
                        <div className={st.questions__inputs}>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="text" placeholder="Страна" required />
                            </label>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="number" placeholder="Баллы" min="1" required />
                            </label>
                        </div>
                    </div>
                </div>
                <div className={st.questions__line}>
                    <div className={st.questions__col}>
                        <div className={st.questions__count}>4</div>
                        <div className={st.questions__inputs}>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="text" placeholder="Страна" required />
                            </label>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="number" placeholder="Баллы" min="1" required />
                            </label>
                        </div>
                    </div>
                    <div className={st.questions__col}>
                        <div className={st.questions__count}>5</div>
                        <div className={st.questions__inputs}>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="text" placeholder="Страна" required />
                            </label>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="number" placeholder="Баллы" min="1" required />
                            </label>
                        </div>
                    </div>
                    <div className={st.questions__col}>
                        <div className={st.questions__count}>6</div>
                        <div className={st.questions__inputs}>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="text" placeholder="Страна" required />
                            </label>
                            <label className={st.questions__enterLabel} htmlFor="">
                                <input className={st.questions__enter} type="number" placeholder="Баллы" min="1" required />
                            </label>
                        </div>
                    </div>
                </div>
                <label className={st.questions__labelSubmit} htmlFor="">
                    <input className={st.questions__submit} type="submit" value="Cохранить" />
                </label>
            </form>
        </div>
    );
};

export default EditQuizPage;
