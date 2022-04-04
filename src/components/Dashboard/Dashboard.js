import React from 'react';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Dashboard1></Dashboard1>
            </div>
            <div>
                <Dashboard2></Dashboard2>
            </div>
            <div>
                <Dashboard3></Dashboard3>
            </div>
        </div>
    );
};

export default Dashboard;