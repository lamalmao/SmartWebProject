import React, { useState } from 'react';
import st from './Navbar.module.css'
import { useSelector,useDispatch } from 'react-redux';
import {visible} from '../../Redux-slices/visibleSlice'
import ModalWindow from '../../UI-Components/ModalWindow/ModalWindow'
import TgForm from '../TgForm/TgForm'
import MailForm from '../MailForm/MailForm'

const Navbar = () => {
    const [log, setLog] = useState(' ');
    useSelector((state)=>state.visibility.value);
    const redirTelegram = () =>{
        setLog('chooseTelegram')
    }
    const redirMail = () =>{
        setLog('chooseMail')
    }
    console.log(log)
    const dispatch = useDispatch();
    return (
        <header>
                <ModalWindow>
                {log===' ' ?
                <TgForm redirTelegram={redirTelegram} redirMail={redirMail}/>
                :  log==='chooseMail'? <MailForm/>: <TgForm></TgForm>} 
                </ModalWindow>
            <div>
                <h2 className={st.Logo}><span className={st.LogoBold}>GEO</span>GAP</h2>
            </div>
                <ul className={st.links}>
                    <li className={st.LinksInside}>PLACEHOLDER</li>
                    <li className={st.LinksInside}>PLACEHOLDER</li>
                    <li className={st.LinksInside}>PLACEHOLDER</li>
                </ul>
            <div>
                <h2 onClick={()=>dispatch(visible())} className={st.Reg}>ВОЙТИ</h2>
            </div>
        </header>
    );
};

export default Navbar;