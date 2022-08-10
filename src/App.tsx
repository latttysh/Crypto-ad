import React from 'react';
import './App.css';
import MyCabinet from "./Pages/MyCabitet/MyCabinet";
import Activate from "./Pages/Activate/Activate";
import Sidebar from "./Components/Sidebar/Sidebar";
import {
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Sidebar/>
            <div className="main">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<MyCabinet/>}/>
                        <Route path="/activate" element={<Activate/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
