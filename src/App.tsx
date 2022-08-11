import React from 'react';
import './App.css';
import MyCabinet from "./Pages/MyCabitet/MyCabinet";
import Activate from "./Pages/Activate/Activate";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import News from "./Pages/News/News";
import Finance from "./Pages/Finance/Finance";
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";


function App() {
    const location = useLocation();
    return (
        <div className="App">
            {(location.pathname !== '/login' && location.pathname !== '/registration')  ? <Sidebar/> : null}
            <div className="main">

                <div className="container">
                    <Routes>
                        <Route path="/" element={<MyCabinet/>}/>
                        <Route path="/activate" element={<Activate/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/finance" element={<Finance/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default App;
