import React from 'react';
import './App.css';

import {Navbar, Header} from './components/index'

const App = () => (
    <div className="app">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
    </div>
)

export default App;
