import React from 'react';
import { useEffect, useState } from 'react';

const TabMenu = () => {
    const [isTab, setIsTab] = useState("tab1");

    return (
        <div className="uiBox">
            
            <ul className="tabMenu">
                <li onClick={() => setIsTab('tab1')} className={isTab==="tab1" ? "on" : ""}>Tab1</li>
                <li onClick={() => setIsTab('tab2')} className={isTab==="tab2" ? "on" : ""}>Tab2</li>
                <li onClick={() => setIsTab('tab3')} className={isTab==="tab3" ? "on" : ""}>Tab3</li>
            </ul>
            
            {
                isTab === "tab1" &&
                <>
                    <div className="tabBox">
                        Contents By Tab1
                    </div>
                </>
            }
            {
                isTab === "tab2" &&
                <>
                    <div className="tabBox">
                        Contents By Tab2
                    </div>
                </>
            }
            {
                isTab === "tab3" &&
                <>
                    <div className="tabBox">
                        Contents By Tab3
                    </div>
                </>
            }

        </div>
    )
}

export default TabMenu;