import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RiskFactors from './pages/RiskFactors';
import ExploreData from './pages/ExploreData';
import About from './pages/About';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/risk-factors" element={<RiskFactors />} />
                    <Route path="/explore-data" element={<ExploreData />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
