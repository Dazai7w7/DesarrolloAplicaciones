import React from 'react'
import './App.css'
import Card from "../Cards/Cards";
import Table from "../Table/Table";
import Media from "../Media/Media";



const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="AppGlass">
            <Media />
            <Card />
            <Table />
            </div>   
        </div>
    );
}

export default Dashboard;
