import React from 'react';
import './App.css';

import {Navbar, Header, Teams, About} from './components/index'

const App = () => (
    <div className="app">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Teams />
        <About />
    </div>
)

export default App;
