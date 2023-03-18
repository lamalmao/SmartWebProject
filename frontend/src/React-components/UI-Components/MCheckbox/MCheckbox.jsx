import React from 'react';
import st from './MCheckbox.module.css'

const MCheckbox = ({children,...props}) => {
    return (
        <div className={st.CheK}>
        <label className={st.switch}>
        <input {...props} type="checkbox"></input>
            <span className={[st.slider, st.round].join(' ')}></span>
        </label>
        <label className={st.Label}>{children}</label>
        </div>
    );
};
export default MCheckbox;