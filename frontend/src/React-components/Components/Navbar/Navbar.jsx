import React from 'react';
import st from './Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { visible } from '../../Redux-slices/visibleSlice'
import ModalWindow from '../../UI-Components/ModalWindow/ModalWindow'
import QuizForm from '../QuizForm/QuizForm';
import TgForm from '../TgForm/TgForm'


const Navbar = () => {
    useSelector((state) => state.visibility.value);
    const dispatch = useDispatch();

    return (
        <div className={st.container}>
            <header>
                <ModalWindow><TgForm></TgForm></ModalWindow>
                <div>
                    <h2 className={st.Logo}><span className={st.LogoBold}>GEO</span>GAP</h2>
                </div>
                <ul className={st.links}>
                    <li className={st.LinksInside}>УГАДАЙКА</li>
                    <li className={st.LinksInside}>УКАЖИ ТОЧКУ</li>
                    <li className={st.LinksInside}>КРОССВОРД</li>
                </ul>
                <div>
                    <h2 onClick={() => dispatch(visible())} className={st.Reg}>ВОЙТИ</h2>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
