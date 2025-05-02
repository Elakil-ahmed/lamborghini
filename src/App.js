import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/compenents/Header"
import Section from "../src/compenents/Section";
import Footerooter from "../src/compenents/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Section />
                <Footerooter />
            </div>
        </Router>
    );
}

export default App;

