import React from 'react';
import st from './MButtonForm.module.css'

const MButtonForm = ({surs,children, ...props}) => {
    return (
        <button className={st.MButtonForm} {...props}>
            {children}
            <img src={surs} alt='ButtonType'></img>
        </button>
    );
};



export default MButtonForm;