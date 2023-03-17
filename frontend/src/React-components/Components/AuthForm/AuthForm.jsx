import React from 'react';
import st from './AuthForm.module.css'
const AuthForm = ({children, ...props}) => {
    return (
        <form className={st.AuthForm} {...props}>
            {children}
        </form>
    );
};

export default AuthForm;