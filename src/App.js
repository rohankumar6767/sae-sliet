import React from 'react';
import './App.css';

import {Navbar, Header, Teams, About, Footer} from './components/index'

const App = () => (
    <div className="app">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Teams />
        <About />
        {/* <Footer /> */}
    </div>
)

export default App;
