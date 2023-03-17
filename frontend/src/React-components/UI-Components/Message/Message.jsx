import React from 'react';
import st from './Message.module.css'

const Message = ({children}) => {
    return (
        <h1 className={st.Message}>{children}</h1>
    );
};


export default Message;