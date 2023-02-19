import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import { Medic } from "../medic/Medic";
import { Home } from "../home/Home";

export const Header = () => {
    return (
        <div className='HeaderContainer'>
            <Router>
                <div className='OptionsContainer'>
                    <NavLink title="Home" className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/">Home</NavLink>
                    <NavLink title="Medics" className={(data) => data.isActive ? 'NavLink-Active': 'NavLink'} to="/Medics">Medics</NavLink>
                </div>
                <Routes>
                    <Route path="/Medics" element={<Medic/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}