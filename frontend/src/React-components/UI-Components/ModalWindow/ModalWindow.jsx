import React from 'react';
import st from './ModalWindow.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { invisible } from '../../Redux-slices/visibleSlice';
import CloseIcon from '../CloseIcon/CloseIcon';

const ModalWindow = ({children}) => {

const vis = useSelector((state)=>state.visibility.value);
const dispatch = useDispatch();


const rootClasses = [st.ModalWindow]

    if(vis === true){
        rootClasses.push(st.active)
    }

    return (
       <div onClick={()=>dispatch(invisible())} className={rootClasses.join(' ')}>
         <div onClick={(e)=>e.stopPropagation()} className={st.ModalWindowContent}>
          <CloseIcon onClick={()=>dispatch(invisible())}/>
          {children}
        </div>
       </div>
    );
};

export default ModalWindow;