import React from 'react';
import st from './MSelect.module.css'

const MSelect = ({...props}) => {
    return (
        <select {...props} className={st.MSelect} name="" id="">
            <option disabled>Тип Квиза</option>
            <option>PLACEHOLDER 1</option>
            <option>PLACEHOLDER 2</option>
            <option>PLACEHOLDER 3</option>
        </select>
    );
};


export default MSelect;