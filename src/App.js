import React from 'react';
import './App.css';

import {Navbar, Header, Teams} from './components/index'

const App = () => (
    <div className="app">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Teams />
    </div>
)

export default App;
