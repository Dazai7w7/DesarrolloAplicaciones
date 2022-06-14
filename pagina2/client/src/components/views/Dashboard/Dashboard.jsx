import React from 'react'
import './App.css'
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Media from "../Media/Media";



const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Media />
            <Cards />
            <Table />
            </div>   
    );
}

export default Dashboard;
