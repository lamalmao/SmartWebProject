import React from 'react';
import st from './MSelect.module.css'

const MSelect = ({options,defaulValue,...props}) => {
    return (
        <select  {...props} className={st.MSelect} name="" id="">
            <option value='' disabled>{defaulValue}</option>
                {
                    options.map(option=>
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                        )
                }
        </select>
    );
};


export default MSelect;