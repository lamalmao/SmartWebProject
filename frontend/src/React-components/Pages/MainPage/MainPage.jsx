import React from 'react';
import ModalWindow from '../../UI-Components/ModalWindow/ModalWindow';
import { useSelector, useDispatch } from 'react-redux';
import { visible} from '../../Redux-slices/visibleSlice';
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';
import MailForm from '../../Components/MailForm/MailForm';
import Message from '../../UI-Components/Message/Message';
import TgForm from '../../Components/TgForm/TgForm';

const MainPage = () => {
    useSelector((state)=>state.visibility.value)
    const dispatch = useDispatch();
    return (
        <div>
             <ModalWindow><TgForm/></ModalWindow>
      <MButtonForm
      onClick={()=>dispatch(visible())}
      >
       РЕГИСТРАЦИЯ
      </MButtonForm>
        </div>
    );
};

export default MainPage;