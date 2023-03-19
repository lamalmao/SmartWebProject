import React, { useState } from "react"
import st from "../Tabs/Tabs.module.css"
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => setActiveTab("tab1")
    const handleTab2 = () => setActiveTab("tab2")
    return (
        <div className={st.Tabs}>
            <ul className={st.nav}>
                <li
                    className={activeTab === "tab1" ? st.active : ""}
                    onClick={handleTab1}
                >
                    СОЗДАННЫЕ
                </li>
                <li
                    className={activeTab === "tab2" ? st.active : ""}
                    onClick={handleTab2}
                >
                    ПРОЙДЕННЫЕ
                </li>
                <MButtonForm>СОЗДАТЬ</MButtonForm>
            </ul>

            <div className={st.outletoutlet}>
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
    );
};
export default Tabs;
