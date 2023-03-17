import React from 'react';
import st from './MInput.module.css'

const MInput = ({...props}) => {
    return (
        <input className={st.MInputCl} {...props} />
    );
};

export default MInput;