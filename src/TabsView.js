// src/TabsView.js

import React, { useState } from 'react';

function TabsView() {
    const [activeTab, setActiveTab] = useState('Dashboard');

    return (
        <div>
            <div>
                <button onClick={() => setActiveTab('Dashboard')}>Dashboard</button>
                <button onClick={() => setActiveTab('Tab2')}>Tab2</button>
                <button onClick={() => setActiveTab('Tab3')}>Tab3</button>
            </div>
            <div>
                {activeTab === 'Dashboard' && <div>This is the Dashboard content.</div>}
                {activeTab === 'Tab2' && <div>This is the Tab2 content.</div>}
                {activeTab === 'Tab3' && <div>This is the Tab3 content.</div>}
            </div>
        </div>
    );
}

export default TabsView;
