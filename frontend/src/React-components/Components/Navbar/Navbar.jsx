import React from 'react';
import st from './Navbar.module.css'

const Navbar = () => {
    return (
        <header>
            <div>
                <h2 className={st.Logo}><span className={st.LogoBold}>GEO</span>GAP</h2>
            </div>
                <ul className={st.links}>
                    <li className={st.LinksInside}>PLACEHOLDER</li>
                    <li className={st.LinksInside}>PLACEHOLDER</li>
                    <li className={st.LinksInside}>PLACEHOLDER</li>
                </ul>
            <div>
                <h2 className={st.Reg}>ВОЙТИ</h2>
            </div>
        </header>
    );
};

export default Navbar;