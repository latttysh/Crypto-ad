import React from 'react';
import './App.css';
import MyCabinet from "./Pages/MyCabitet/MyCabinet";
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {
    return (
        <div className="App">
            <Sidebar/>
            <div className="container">
                <MyCabinet/>
            </div>
        </div>
    );
}

export default App;
