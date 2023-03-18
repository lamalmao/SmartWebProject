import React, { useState } from 'react';
import st from './Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { visible } from '../../Redux-slices/visibleSlice'
import ModalWindow from '../../UI-Components/ModalWindow/ModalWindow'
import TgForm from '../TgForm/TgForm'
import TelegramForm from '../TelegramForm/TelegramForm';
import MailForm from '../MailForm/MailForm'
import Message from '../../UI-Components/Message/Message'
import CodeMailForm from '../CodeMailForm/CodeMailForm';
import CodeTelegramForm from '../CodeTelegramForm/CodeTelegramForm';
const Navbar = () => {
    const [log, setLog] = useState('');
    useSelector((state)=>state.visibility.value);
    const dispatch = useDispatch();

    const redirTelegram = () =>{
        setLog('chooseTelegram')
    }
    const redirMail = () =>{
        setLog('chooseMail')
        
    }
    const handleSubmitAndRedirCodeMail = (e) =>{
        e.preventDefault()
        setLog('codeMail')
    }
    const handleSubmitAndRedirTelegramCode = (e) =>{
        e.preventDefault()
        setLog('codeTelegram')
    }
    
    console.log(log)


    

    return (

        <header>
                <ModalWindow>
                {log==='' ?
                <TgForm redirTelegram={redirTelegram} redirMail={redirMail}/>:  
                 log==='chooseMail'? <MailForm handleSubmitAndRedirCodeMail={handleSubmitAndRedirCodeMail}/>:
                 log==='chooseTelegram'?<TelegramForm handleSubmitAndRedirTelegramCode={handleSubmitAndRedirTelegramCode}/>:
                 log==='codeMail'?<CodeMailForm/>:
                 log==='codeTelegram'?<CodeTelegramForm/>:
                 <Message>А</Message>} 
                
                </ModalWindow>


      
          
                <div className={st.container}>
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
                </div>
       
        </header>
    );
};

export default Navbar;
