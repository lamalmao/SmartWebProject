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
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const [formMailData, setFormMailData]=useState({
        username:'',
        password:'',
        email:'',
      })
      const [codeData, setCodeData]=useState('')

      const inputHandler = (e) => {
        setFormMailData(prevState=>{return {...prevState,[e.target.name]:e.target.value}})
    }
    const inputCodeHandler = (e) => {
        setCodeData(e.target.value)
    }
    

    const [log, setLog] = useState('');
    useSelector((state)=>state.visibility.value);
    const dispatch = useDispatch();

    const redirTelegram = () =>{
        setLog('chooseTelegram')
    }
    const redirMail = () =>{
        setLog('chooseMail')
    }
const username = formMailData.username;
const password = formMailData.password;
const email = formMailData.email;

    var newReqest = new Request("https://laesia.site:778/api/signup", {
    headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'},
    mode:'cors',
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      verificationMethod:'mail'
    }),
  });
  
  var body={};

    const handleSubmitAndRedirCodeMail = async (e) =>{
        e.preventDefault()
        // const MailUserData = {
        //     username: formMailData.username,
        //     password:formMailData.password,
        //     email:formMailData.email,
        //     verificationMethod:'mail',
        // }
        // axios.post('http://laesia.site:778/signup',{
        //     headers:{
        //         'Content-Type':'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Origin':'http://laesia.site:778'
        //     },
        //     mode:'no-cors',data:MailUserData})
        // .then(res=>{
        //     console.log(res);
        //     console.log(res.data)
        // }
        // )
        
        try {
            const res = await fetch(newReqest);
            console.log(res);
            body = await res.json();
            console.log(body)
        } catch (err) {
          console.log(err);
        }
    setLog('codeMail')
        };
        var verifyReq = new Request("https://laesia.site:778/api/verify", {
    headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'},
    mode:'cors',
    method: "POST",
    body: JSON.stringify({
      userId: body.userId,
      code: codeData
    }),
  });
        const handleSubmitSendCode = async (e) =>{
            e.preventDefault()
            try {
                const res = await fetch(verifyReq);
                console.log(res);
                console.log(await res.json())
                
            } catch (err) {
              console.log(err);
            }
            setLog('succMail')
        }

    const handleSubmitAndRedirTelegramCode = (e) =>{
        e.preventDefault()
        setLog('codeTelegram')
    }

    console.log(log)
    console.log(body)

    
   

    return (

        <header>
                <ModalWindow>
                {log==='' ?
                <TgForm redirTelegram={redirTelegram} redirMail={redirMail}/>:  
                 log==='chooseMail'? <MailForm onchHandler={inputHandler} valuePassword={formMailData.password} valueMail={formMailData.email} valueUsername={formMailData.username}  handleSubmitAndRedirCodeMail={handleSubmitAndRedirCodeMail}/>:
                 log==='chooseTelegram'?<TelegramForm handleSubmitAndRedirTelegramCode={handleSubmitAndRedirTelegramCode}/>:
                 log==='codeMail'?<CodeMailForm  handleSubmitSendCode={handleSubmitSendCode} onchHandler={inputCodeHandler} codeData={codeData}/>:
                 log==='codeTelegram'?<CodeTelegramForm/>:log==='succMail'?
                 <Message>Вы успешно зарегестрировались</Message>:<Message>фывыфвыф</Message>} 
                
                </ModalWindow>


      
          
                <div className={st.container}>
                <div>
                    <NavLink style={{textDecoration:'none', color:'white'}} to='/'><h2 className={st.Logo}><span className={st.LogoBold}>GEO</span>GAP</h2></NavLink>
                </div>

                <ul className={st.links}>
                    <li className={st.LinksInside}>УГАДАЙКА</li>
                    <li className={st.LinksInside}>УКАЖИ ТОЧКУ</li>
                    <NavLink to='/crossword' style={{textDecoration:'none', color:'white'}}><li className={st.LinksInside}>КРОССВОРД</li></NavLink>
                </ul>
                <div>
                    <h2 onClick={() => dispatch(visible())} className={st.Reg}>ВОЙТИ</h2>
                </div>
                </div>
       
        </header>
    );
};

export default Navbar;
