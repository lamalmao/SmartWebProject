import React from 'react';
import st from './CloseIcon.module.css'
import Chrest from './Chrest.svg'
const CloseIcon = ({...props}) => {
    return (
        <img className={st.CloseIcon} {...props} src={Chrest} alt="Закрыть" />
    );
};

export default CloseIcon;